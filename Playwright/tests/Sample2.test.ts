import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.getByRole('link', { name: ' View Product' }).first().click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.getByText('')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
});