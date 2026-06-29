import { test, expect } from '@playwright/test';

test('Browser command test',async({page},testInfo)=>{
    await page.goto("https://www.google.com");
    console.log("Title: ",testInfo.title);
    console.log("File:", testInfo.file);
    // console.log("Browser:", testInfo.project.name);
    console.log("Retry:", testInfo.retry);
    console.log("Expected Status:", testInfo.expectedStatus);
    await page.close();
})