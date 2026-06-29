import {test,expect} from "@playwright/test";

const data = {
    name: "Akkshu",
    mail: "akkshu123@gmail.com"
};
test("Test Case 5 - Register User with existing mail",async({page})=>{
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
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Name' }).fill(data.name);
    await page.locator("input[data-qa='signup-email']").fill(data.mail);
    await page.getByRole('button', { name: 'Signup' }).click();
    const exist = page.getByText('Email Address already exist!')
    await expect(exist).toHaveText("Email Address already exist!");
})
