import {test,expect} from "@playwright/test";

test("Test Case 6 - Contact Us Form",async({page})=>{
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
    await page.getByRole('link', { name: ' Contact us' }).click();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Name' }).fill("Akkshu");
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill("akkshu123@gmail.com");
    await page.getByRole('textbox', { name: 'Subject' }).fill("Feedback");
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill("For practice");
    // await page.getByRole('button', { name: 'Choose File' }).click();
    await page.locator("input[type='file']").setInputFiles("C:/Users/akksh/Downloads/cyclos_automation_test_plan.pdf");
})