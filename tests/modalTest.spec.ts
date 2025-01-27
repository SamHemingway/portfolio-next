import { test, expect, type Page } from "@playwright/test";

test("the modal should close when pressing the ESC key", async ({
  page,
}: {
  page: Page;
}) => {
  console.log('Starting test...');
  
  // Navigate and wait for network to be idle with longer timeout
  console.log('Navigating to page...');
  await page.goto("/", { 
    waitUntil: 'networkidle',
    timeout: 30000 // 30 seconds for initial load
  });
  console.log('Page loaded');
  
  try {
    // Look for the button within the navigation
    console.log('Looking for Let\'s talk button in navigation...');
    const talkButton = page.locator('nav button:text-is("Let\'s talk")').first();
    
    // Wait for button to be visible and clickable with longer timeouts
    await expect(talkButton).toBeVisible({ timeout: 30000 });
    await expect(talkButton).toBeEnabled();
    
    console.log('Button found, clicking...');
    await talkButton.click();
    console.log('Button clicked');

    // Wait for the iframe to be visible
    console.log('Waiting for iframe...');
    await page.waitForSelector('iframe', { 
      state: 'visible', 
      timeout: 30000 
    });
    const iframe = page.frameLocator("iframe");
    console.log('iframe found');

    // Add a small delay after iframe is found to ensure it's fully loaded
    await page.waitForTimeout(2000);

    // Press escape in the iframe
    console.log('Pressing escape...');
    await iframe.locator("body").press("Escape");
    console.log('Escape pressed');

    // Verify the modal is closed
    console.log('Verifying modal is closed...');
    await expect(page.locator("cal-modal-box")).not.toBeVisible({ timeout: 10000 });
    console.log('Test complete');
  } catch (error) {
    // Take a screenshot and log page content on error
    console.error('Test failed:', error);
    await page.screenshot({ path: 'test-failure.png', fullPage: true });
    const html = await page.content();
    console.log('Page HTML at time of failure:', html);
    throw error;
  }
});
