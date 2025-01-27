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
    
    // Simple navigation without waiting for network idle
    console.log('Navigating to page...');
    await page.goto("/");
    console.log('Page loaded');
    
    // Look for the button within the navigation
    currentStep = 'button-search';
    console.log('Looking for Let\'s talk button...');
    
    // Log all buttons for debugging
    const allButtons = await page.locator('button').all();
    console.log('Found buttons:', await Promise.all(allButtons.map(async button => {
      const text = await button.textContent();
      return `"${text}" (visible: ${await button.isVisible()})`;
    })));
    
    // Try to find the button with a more general selector first
    const talkButton = page.getByRole('button', { name: /let's talk/i }).first();
    
    // Wait for button to be visible and clickable
    await expect(talkButton).toBeVisible({ timeout: 10000 });
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
      timeout: 10000 
    });
    const iframe = page.frameLocator("iframe");
    console.log('iframe found');

    // Add a small delay after iframe is found to ensure it's fully loaded
    await page.waitForTimeout(2000);

    // Press escape in the iframe
    currentStep = 'escape-press';
    console.log('Pressing escape...');
    await iframe.locator("body").press("Escape");
    console.log('Escape pressed');

    // Verify the modal is closed
    currentStep = 'modal-check';
    console.log('Verifying modal is closed...');
    await expect(page.locator("cal-modal-box")).not.toBeVisible({ timeout: 5000 });
    console.log('Test complete');

  } catch (error) {
    console.error(`Test failed during step: ${currentStep}`);
    console.error('Error details:', error);
    
    try {
      // Log the current page content
      const html = await page.content();
      console.log(`Page HTML during failed step (${currentStep}):`, html);
    } catch (contentError) {
      console.error('Failed to get page content:', contentError);
    }
    
    throw error;
  }
});
