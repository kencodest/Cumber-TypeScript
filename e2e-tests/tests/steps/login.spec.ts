import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { page } from "../../corelib/corelib.spec"
import LoginPage from "../pages/loginpage";


let loginPage: LoginPage;

Given("a user is on the login page", async () => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    
});


When("the user enters login details", async () => {
    await loginPage.loginToApp();
});


Then("log out should be successful", async () => {
    console.log("Logout successful")
});