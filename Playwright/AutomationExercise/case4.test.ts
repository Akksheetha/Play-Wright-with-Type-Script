import { test, expect } from '@playwright/test';

test('Test Case 4 - Logout User', async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    const home = page.locator("//a[normalize-space()='Home']");
    await expect(home).toBeVisible();
    await page.locator("//a[normalize-space()='Signup / Login']").click();
    await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
    await page.locator("input[data-qa='login-email']").fill("aqwe@gmail.com");
    await page.locator("input[data-qa='login-password']").fill("Pass@1234");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible();
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
    await page.close();
});