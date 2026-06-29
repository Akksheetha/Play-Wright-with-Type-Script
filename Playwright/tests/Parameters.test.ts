import { test, expect } from '@playwright/test';

const searchData = [{keyword:"DemoBlaze"}];
for(const data of searchData){
test(`LoginDemo Test - ${data.keyword}`,async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    console.log(data);
    await page.click('#login2')
    await page.fill('#loginusername',"Admin");
    await page.fill('#loginpassword',"admin");
    await page.click('button[onclick="logIn()"]');
})
}