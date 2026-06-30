import {test,expect} from "@playwright/test";

test("Test Case 9 - Searching a product",async({page})=>{
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
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search Product' }).fill("Blue Top");
    await expect(page.locator('#submit_search')).toBeVisible();
    await page.locator('#submit_search').click();
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
})