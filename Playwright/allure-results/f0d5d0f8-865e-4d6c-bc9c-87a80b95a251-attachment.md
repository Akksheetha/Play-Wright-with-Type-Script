# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample2.test.ts >> test
- Location: tests\Sample2.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Add to cart').nth(1)
    - locator resolved to <a data-product-id="1" class="btn btn-default add-to-cart">…</a>
  - attempting hover action
    2 × waiting for element to be visible and stable
      - element is visible and stable
      - scrolling into view if needed
      - done scrolling
      - <h2 class="title text-center">Features Items</h2> intercepts pointer events
    - retrying hover action
    - waiting 20ms
    2 × waiting for element to be visible and stable
      - element is visible and stable
      - scrolling into view if needed
      - done scrolling
      - <h2 class="title text-center">Features Items</h2> intercepts pointer events
    - retrying hover action
      - waiting 100ms
    24 × waiting for element to be visible and stable
       - element is visible and stable
       - scrolling into view if needed
       - done scrolling
       - <h2 class="title text-center">Features Items</h2> intercepts pointer events
     - retrying hover action
       - waiting 500ms

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://automationexercise.com/');
  5  |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  6  | 
> 7  |   await page.getByText('Add to cart').nth(1).hover();
     |                                              ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  8  |   await page.getByText('Add to cart').nth(1).click();
  9  |   await expect(page.locator('.icon-box')).toBeVisible();
  10 |   await page.getByRole('button', { name: 'Continue Shopping' }).click();
  11 |   await page.getByRole('link', { name: ' Cart' }).click();
  12 |   await expect(page.locator('#product-1')).toContainText('Blue Top');
  13 |   await page.getByText('Proceed To Checkout').click();
  14 |   await expect(page.locator('div').filter({ hasText: '' }).nth(5)).toBeVisible();
  15 | });
```