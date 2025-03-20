import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { page } from "./webhooks.spec"

setDefaultTimeout(60000) //this will be the timeout for running all the steps in the file


Then("the homepage should be displayed", async () => {
    const isVisible = await page.locator("xpath=//a[contains(.,'Edit your account information')]").isVisible(); 
    expect(isVisible).toEqual(true);
});


When("the user logs out", async () => {
    await page.locator("xpath=//a[contains (.,'Logout') and @class='list-group-item']").click();
    await page.getByRole("link", { name: 'Continue' }).click();
});


Then("log out should be successful", async () => {
});





