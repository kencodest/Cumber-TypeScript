import { Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";


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