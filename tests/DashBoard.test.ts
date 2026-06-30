import {test,expect} from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json'; 

test.describe('DashBoard Tests', () => { 
    test.beforeEach(async ({ loginPage }) => { 
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        ); 
    });
    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logout();
    });
    test('Verify Quick Lauch Section',async({dashboardPage})=>{
        await expect(dashboardPage.quickLaunch).toBeVisible();
    });
    test('Verify Time at work widget',async({dashboardPage})=>{
        await expect(dashboardPage.timeAtWorkCard).toBeVisible();
    })
})