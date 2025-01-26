import { test, expect, type Page } from "@playwright/test";

test("the modal should close when pressing the ESC key", async ({
  page,
}: {
  page: Page;
}) => {
  await page.goto("/");
  await page.waitForTimeout(4000);
  await page
    .getByRole("navigation")
    .getByRole("button", { name: "Let's talk" })
    .click();

  await page.waitForTimeout(2000);

  await page.waitForSelector("iframe", { state: "visible" });

  const calFrame = page.frameLocator("iframe");

  await calFrame.locator("body").press("Escape");

  await expect(page.locator("cal-modal-box")).not.toBeVisible();
});
