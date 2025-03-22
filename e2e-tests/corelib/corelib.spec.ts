// Import necessary hooks and tools from Cucumber for test lifecycle management
import { Before, After, setDefaultTimeout, AfterAll, BeforeAll } from "@cucumber/cucumber";

// Import Playwright types and Chromium browser for automation
import { Browser, BrowserContext, Page, chromium } from "playwright";

// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Set a default timeout of 2 minutes for each test step
setDefaultTimeout(1000 * 60 * 2); // 2 minutes timeout for all steps

// Declare variables to hold browser instances
let browser: Browser;
let browserContext: BrowserContext;
let page: Page;

// ------------------------
// Hook: Before All Tests
// ------------------------
BeforeAll(async () => {
    dotenv.config(); // Load environment variables from .env file

    // Read the desired browser type from the environment
    let browserType = process.env.browser;

    // Launch the appropriate browser based on the environment variable
    switch (browserType) {
        case "chrome":
            browser = await chromium.launch({
                headless: false,  // Launch browser with UI
                channel: "chrome" // Use installed Google Chrome
                // args: ["--start-maximized"] // Optional: Start maximized
            });
            break;

        case "brave":
            browser = await chromium.launch({
                executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", // Path to Brave browser
                headless: false,  // Launch browser with UI
                channel: "brave"  // Optional: Specify channel if needed
                // args: ["--start-maximized"] // Optional: Start maximized
            });
            break;

        default:
            // Throw error if browser type is invalid or unsupported
            throw new Error(`Invalid ${browserType} browser type is passed`);
            break;
    }
});

// ------------------------
// Hook: Before Each Scenario
// ------------------------
Before(async () => {
    // Create a new browser context (isolated session)
    browserContext = await browser.newContext({
        javaScriptEnabled: true    // Enable JavaScript
    });

    // Open a new page (tab) in the context
    page = await browserContext.newPage();
});

// ------------------------
// Hook: After Each Scenario
// ------------------------
After(async () => {
    // Close the current page and context after each test
    await page.close();
    await browserContext.close();
});

// ------------------------
// Hook: After All Tests
// ------------------------
AfterAll(async () => {
    // Close the browser completely after all tests finish
    await browser.close();
});

// Export the page for use in test files
export { page };

// Optional: Export a function to get the page instead of exporting it directly
// Uncomment below if you prefer using a getter function
/*
export function getPage(): Page {
    return page;
}
*/
