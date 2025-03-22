import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { page } from "../../corelib/corelib.spec"
import Homepage from "../pages/homepage";
import LoginPage from "../pages/loginpage";

let homepage: Homepage;
let loginPage: LoginPage;


Then("the homepage should be displayed", async () => {
    homepage = new Homepage(page);
    await homepage.waitForEditAccountInformation();
});


When("the user logs out", async () => {
    loginPage = new LoginPage(page);
    await loginPage.logOut();
});






