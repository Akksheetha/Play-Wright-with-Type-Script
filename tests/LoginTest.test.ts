import {test,expect} from "../fixtures/baseFixture";
import loginData from "../testData/LoginData.json";
test("Valid login",async({loginPage})=>{
    await loginPage.loginAction(
        loginData.username,
        loginData.password
    )
    await expect(loginPage.welcomeText).toBeVisible();
})