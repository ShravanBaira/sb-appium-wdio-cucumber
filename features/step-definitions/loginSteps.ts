import { Given, When, Then } from '@wdio/cucumber-framework';
// @ts-ignore
import {LoginPage} from "../pageobjects/login.page.ts";

Given(/^I am on the (\w+) page$/, async (loginPage) => {
    await LoginPage.locationRequired.click()
    await LoginPage.useLocation.click()
    await LoginPage.trackActivity.click()
    await LoginPage.stateSelector.click()
    // await LoginPage.loginButton.click()

    console.log("this is executed", loginPage)
});

When(/^I login with {string} and {string}$/, async (a, b) => {
    console.log("this is executed", a, b)
});

Then(/^I should see the lobby screen$/, async () => {
    console.log("this is executed")
});

