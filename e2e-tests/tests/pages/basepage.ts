import { Page } from "playwright";

export default class BasePage {
    
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fill(object: any, data: string){
        await this.page.locator(object.locator, object.locatorOptions).fill(data, object.actionOptions)

    }

    async click(object: any){
        await this.page.locator(object.locator, object.locatorOptions).click(object.actionOptions)
    }

}