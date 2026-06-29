import { test, expect } from '@playwright/test';

test('Test Case 2 - Login User with correct email and password', async ({ page }) => {

    await page.route('**/*', route => {
    const url = route.request().url();

    if (
        url.includes('googleads') ||
        url.includes('doubleclick') ||
        url.includes('googlesyndication') ||
        url.includes('adservice')
    ) {
        route.abort();
    } else {
        route.continue();
    }
});
    await page.goto("https://automationexercise.com/");
    const home = page.locator("//a[normalize-space()='Home']");
    await expect(home).toBeVisible();
    await page.locator("//a[normalize-space()='Signup / Login']").click();
    await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
    await page.locator("input[data-qa='login-email']").fill("akkshu123@gmail.com");
    await page.locator("input[data-qa='login-password']").fill("Password@1234");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible();
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.locator("//b[text()='Account Deleted!']")).toContainText("Account Deleted!");
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.close();
});