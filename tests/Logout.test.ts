import {test,expect} from "../fixtures/baseFixture";
import loginData from '../test-data/loginData.json';

test.describe('Logout Tests @Logout', () => { 
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    test('Logout Test',async({loginPage,dashboardPage})=>{
        await dashboardPage.logout();
        await expect(loginPage.loginTitle).toHaveText("Login");
    });
})