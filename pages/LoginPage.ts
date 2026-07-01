import {Page,Locator} from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly login:Locator;
    readonly user:Locator;
    readonly pass:Locator;
    readonly loginbtn:Locator;
    readonly welcomeText:Locator;

    constructor(page:Page){
        this.page = page;
        this.login = page.locator("//a[@id='login2']");
        this.user = page.locator("#loginusername");
        this.pass = page.locator("#loginpassword");
        this.loginbtn = page.getByRole('button', { name: 'Log in' });
        this.welcomeText = page.locator("//a[@id='nameofuser']");
    }
    async loginAction(username:string, password:string){
        console.log(process.env.BASE_URL);
        await this.page.goto('/');
        await this.login.click();
        await this.user.fill(username);
        await this.pass.fill(password);
        await this.loginbtn.click();
    }
}