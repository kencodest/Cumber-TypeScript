import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { page } from "./webhooks.spec"


Given("a user is on the Homepage", async () => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
});


When("the user enters login details", async () => {
    await page.locator("xpath=//a[contains (.,'My account') and @data-toggle]").click(); 
    await page.locator("xpath=//input[@id='input-email']").fill('dummy1234@gmail.com');
    await page.locator("xpath=//input [@id='input-password']").fill('dummy1234@gmail.com');
});


Then("login should be successful", async () => {
    await page.locator("xpath=//input[@value='Login']").click();
});