import { Page } from "playwright";
import * as pageLocator from "../locators/login-locators.json"
import BasePage from "../pages/basepage"


export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    async gotoLoginPage() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/"); 
        // await this.page.locator(pageLocator.loginLink.locator).click(); 
        await super.click(pageLocator.loginLink);       
    };

    async loginToApp() {

        await super.fill(pageLocator.emailField, "dummy1234@gmail.com");
        await super.fill(pageLocator.passwordField, "dummy1234@gmail.com");
        await super.click(pageLocator.loginBtn);

        // await this.page.locator(pageLocator.emailField.locator).fill('dummy1234@gmail.com');
        // await this.page.locator(pageLocator.passwordField.locator).fill('dummy1234@gmail.com');
        // await this.page.locator(pageLocator.loginBtn.locator).click();
    };

    async logOut() {
        await super.click(pageLocator.logoutLink);

        // await this.page.locator(pageLocator.logoutLink.locator).click();
        const link = pageLocator.continueBtn.locator as "link"
        await this.page.getByRole(link, pageLocator.continueBtn.actionOptions).click();
    };

};

