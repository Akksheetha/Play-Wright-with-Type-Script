import { test, expect } from '@playwright/test';

test("simplealert", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{waitUntil:"networkidle"});
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    const but = page.locator("//p[text()='JavaScript Alerts']/button");
    await but.click();
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.locator("//p[@class='text-gray-900 text-size-16 mt-10 text-black font-bold']//button[@type='button'][normalize-space()='Click Me']").click()
    await expect("You pressed Cancel!").toBe(await page.locator("//p[@id='confirm-demo']").textContent())
    page.once("dialog",async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.accept("Akkshee"))
    })
    await page.locator("//div[3]//p[1]//button[1]").click()
    console.log(await page.locator("//p[@id='prompt-demo']").textContent())
});