import { test,expect} from '@playwright/test';
test("Login test1 @akkshee",async({page})=>{
    test.skip(true,"Module under development");
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername","Admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[text()='Log in']");
    await expect.soft((page.getByRole("link",{name:"Log out"}))).toBeVisible();
    await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const welcomeText = await page.locator("#nameofuser").textContent();
    expect.soft((welcomeText)).toBe("Welcome Admin");
})