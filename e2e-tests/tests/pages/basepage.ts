import { Page } from "playwright";

export default class BasePage {
    
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fill(object: any, data: string){
        await this.page.locator(object.locator, object.locatorOptions).fill(data, object.actionOptions)
        console.log(`entered ${data} in ${object.description}`);
    }

    async click(object: any, roleFlag=false){
        if(roleFlag) {

            const link = object.locator as "link"
            await this.page.getByRole(link, object.actionOptions).click(object.actionOptions);
        }
        else {
            await this.page.locator(object.locator, object.locatorOptions).click(object.actionOptions); 
        };
        console.log(`clicked on ${object.description}`);

    }

}