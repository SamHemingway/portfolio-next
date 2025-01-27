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
    
    // Navigate and wait for initial load
    console.log('Navigating to page...');
    await page.goto("/");
    await page.waitForLoadState('domcontentloaded');
    console.log('Page loaded');
    
    // Wait for header navigation to be interactive
    await page.waitForSelector('nav', { state: 'visible' });
    console.log('Navigation visible');
    
    // Look for the button within the navigation
    currentStep = 'button-search';
    console.log('Looking for Let\'s talk button...');
    
    // Log all buttons for debugging
    const allButtons = await page.locator('button, a').all();
    console.log('Found clickable elements:', await Promise.all(allButtons.map(async button => {
      const text = await button.textContent();
      const isVisible = await button.isVisible();
      const role = await button.getAttribute('role');
      return `"${text}" (visible: ${isVisible}, role: ${role})`;
    })));
    
    // Try multiple selectors to find the button
    const talkButton = page.locator('a, button').filter({ hasText: /let's talk/i }).first();
    
    // Wait for button to be visible and clickable with increased timeout
    console.log('Waiting for button to be visible...');
    await expect(talkButton).toBeVisible({ timeout: 30000 });
    await expect(talkButton).toBeEnabled();
    
    currentStep = 'button-click';
    console.log('Button found, clicking...');
    await talkButton.click();
    console.log('Button clicked');

    // Wait for the iframe to be visible
    currentStep = 'iframe-wait';
    console.log('Waiting for iframe...');
    await page.waitForSelector('iframe.cal-embed[name="cal-embed=meet"]', { 
      state: 'visible', 
      timeout: 30000 
    });
    const iframe = page.frameLocator('iframe.cal-embed[name="cal-embed=meet"]');
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
      // Log the current page content and URL
      const html = await page.content();
      const url = page.url();
      console.log(`Current URL: ${url}`);
      console.log(`Page HTML during failed step (${currentStep}):`, html);
      
      // Take a screenshot
      await page.screenshot({ path: `test-failure-${currentStep}.png`, fullPage: true });
    } catch (contentError) {
      console.error('Failed to get debug information:', contentError);
    }
    
    throw error;
  }
});
