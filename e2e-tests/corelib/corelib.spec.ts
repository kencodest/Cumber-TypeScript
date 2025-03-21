import { Before, After, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";


setDefaultTimeout(1000 * 60 *2) //this will be the timeout for running all the steps in the file


let browser:Browser;
let browserContext:BrowserContext;
let page:Page


Before( async () => {
    browser = await chromium.launch({
        headless: false,
        channel: "chrome"
        // args: ["--start-maximized"]
    });

    browserContext = await browser.newContext({
        viewport: null,
        javaScriptEnabled: true
    });

    page = await browserContext.newPage();
});


After( async () => {
    await page.close();
    await browserContext.close();
    await browser.close();
});

export { page }

// //If you do not want to export the page directly, you can wrap it in a function and 
// // every time you want to use page, you will have to call the function
// export function getPage(): Page {
//     return page;
// };