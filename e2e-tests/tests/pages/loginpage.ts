import { Page } from "playwright";
import * as pageLocator from "../locators/login-locators.json"
import BasePage from "./basepage"


export default class LoginPage extends BasePage {
  
    constructor(page: Page) {
        super(page);
    };
    

    async gotoLoginPage() {
        await this.page.goto(process.env.app_url!); 
        // await this.page.locator(pageLocator.loginLink.locator).click(); 
        await super.click(pageLocator.loginLink);       
    };

    async loginToApp() {

        await super.fill(pageLocator.emailField, process.env.user_name!);
        await super.fill(pageLocator.passwordField, process.env.password!);
        await super.click(pageLocator.loginBtn);

        // await this.page.locator(pageLocator.emailField.locator).fill('dummy1234@gmail.com');
        // await this.page.locator(pageLocator.passwordField.locator).fill('dummy1234@gmail.com');
        // await this.page.locator(pageLocator.loginBtn.locator).click();
    };

    async logOut() {
        await super.click(pageLocator.logoutLink);
        await super.click(pageLocator.continueBtn, true);

        // await this.page.locator(pageLocator.logoutLink.locator).click();
        // const link = pageLocator.continueBtn.locator as "link"
        // await this.page.getByRole(link, pageLocator.continueBtn.actionOptions).click();
    };

};

