import { Page } from "playwright";
import { expect } from "playwright/test";
import * as pageLocator from "../locators/homepage-locator.json"
import BasePage from "../pages/basepage"


export default class Homepage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async waitForEditAccountInformation() {
        await this.page.locator(pageLocator.editInfoOption.locator).waitFor(pageLocator.editInfoOption.actionOptions);
        expect(this. page.locator(pageLocator.editInfoOption.locator)).toBeVisible(); 
    }
}