import {test,expect} from '@playwright/test';

test('Test case 1 in Automation Testing',async({page})=>{
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
    await expect(page.locator("#form > div > div > div:nth-child(3) > div > h2")).toBeVisible();
    const name = page.getByPlaceholder("Name");
    await name.fill("Akksh123");
    const mail = page.getByPlaceholder("Email Address");
    mail.fill("akkshu@gmail.com");
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.locator("#id_gender2").click();
    await page.locator("#password").fill("Pass@1234");
    await page.selectOption("#days", {value: "23"});
    await page.selectOption("#months", {value: "9"});
    await page.selectOption("#years", {value: "2004"});
    await page.locator("#newsletter").check();
    await page.locator("#optin").check();
    await page.locator("#first_name").fill("Akksh");
    await page.locator("#last_name").fill("M");
    await page.locator("#company").fill("ABC");
    await page.locator("#address1").fill("12/6 Anna nagar");
    await page.selectOption("#country", {value: "India"});
    await page.locator("#state").fill("Tamil nadu");
    await page.locator("#city").fill("Namakkal");
    await page.locator("#zipcode").fill("636003");
    await page.locator("#mobile_number").fill("1234567890");
    await page.getByRole('button',{name : 'Create Account'}).click();
    await expect(page.locator("//b[text()='Account Created!']")).toContainText("Account Created!");
    await page.getByRole("link",{name : "Continue"}).click();
    await page.getByRole("link",{name : " Delete Account"}).click();
    await expect(page.locator("//b[text()='Account Deleted!']")).toContainText("Account Deleted!");
    await page.getByRole("link",{name : "Continue"}).click();
    page.close();
})