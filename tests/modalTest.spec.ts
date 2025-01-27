import { test, expect, type Page } from "@playwright/test";

// Increase test timeout to 60 seconds
test.setTimeout(60000);

test("the modal should close when pressing the ESC key", async ({
  page,
}: {
  page: Page;
}) => {
  let currentStep = 'starting';
  
  try {
    console.log('Starting test...');
    currentStep = 'navigation';
    
    // Navigate and wait for network to be idle with longer timeout
    console.log('Navigating to page...');
    await page.goto("/", { 
      waitUntil: 'networkidle',
      timeout: 45000 // 45 seconds for initial load
    });
    console.log('Page loaded');
    
    // Look for the button within the navigation
    currentStep = 'button-search';
    console.log('Looking for Let\'s talk button in navigation...');
    const talkButton = page.locator('nav button:text-is("Let\'s talk")').first();
    
    // Wait for button to be visible and clickable with longer timeouts
    await expect(talkButton).toBeVisible({ timeout: 45000 });
    await expect(talkButton).toBeEnabled();
    
    currentStep = 'button-click';
    console.log('Button found, clicking...');
    await talkButton.click();
    console.log('Button clicked');

    // Wait for the iframe to be visible
    currentStep = 'iframe-wait';
    console.log('Waiting for iframe...');
    await page.waitForSelector('iframe', { 
      state: 'visible', 
      timeout: 45000 
    });
    const iframe = page.frameLocator("iframe");
    console.log('iframe found');

    // Add a small delay after iframe is found to ensure it's fully loaded
    await page.waitForTimeout(3000);

    // Press escape in the iframe
    currentStep = 'escape-press';
    console.log('Pressing escape...');
    await iframe.locator("body").press("Escape");
    console.log('Escape pressed');

    // Verify the modal is closed
    currentStep = 'modal-check';
    console.log('Verifying modal is closed...');
    await expect(page.locator("cal-modal-box")).not.toBeVisible({ timeout: 15000 });
    console.log('Test complete');

  } catch (error) {
    console.error(`Test failed during step: ${currentStep}`);
    console.error('Error details:', error);
    
    try {
      // Try to get current state
      const html = await page.content();
      console.log(`Page HTML during failed step (${currentStep}):`, html);
    } catch (contentError) {
      console.error('Failed to get page content:', contentError);
    }
    
    throw error;
  }
});
