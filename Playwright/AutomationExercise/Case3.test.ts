import { test, expect } from '@playwright/test';

test('Test Case 3 - Login User with incorrect email and password', async ({ page }) => {

    await page.goto("https://automationexercise.com/");
    const home = page.locator("//a[normalize-space()='Home']");
    await expect(home).toBeVisible();
    await page.locator("//a[normalize-space()='Signup / Login']").click();
    await expect(page.locator("//h2[text()='Login to your account']")).toBeVisible();
    await page.locator("input[data-qa='login-email']").fill("wronguser@gmail.com");
    await page.locator("input[data-qa='login-password']").fill("WrongPass123");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//p[text()='Your email or password is incorrect!']")).toContainText("Your email or password is incorrect!");
    await page.close();
});