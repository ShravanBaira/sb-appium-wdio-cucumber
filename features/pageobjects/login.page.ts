// @ts-ignore
import {
    getByOnlyResourceId,
    getByButtonAndText,
    getByAccessibilityID,
    getByPredicateString,
    getByType,
    getByXPath
} from './helpers'

export class LoginPage {


    public static get locationRequired() {
        return $(getByPredicateString('name == "Next"'))
    }

    public static get useLocation() {
        return $(getByPredicateString('name == "Allow While Using App"'))
    }

    public static get trackActivity() {
        return $(getByPredicateString('name == "Ask App Not to Track"'))
    }

    public static get stateSelector() {
        return $(getByXPath('(//XCUIElementTypeLink[@name="West Virginia"])[1]'))
    }
    public static get emailTextField() {
        return getByOnlyResourceId('login-email')
    }

    public static get passwordTextField() {
        return getByOnlyResourceId('login-password')
    }

    public static get loginButton() {
        return $(getByPredicateString('name == "Log into Sportsbook"'))
    }


    public static get JoinButton() {
        return getByPredicateString('name == "Join FanDuel Sportsbook"')
    }


    public static async login(email: string, pwd: string) {
        await LoginPage.emailTextField.setValue([email])
        await LoginPage.passwordTextField.setValue([pwd])
        await LoginPage.loginButton.click()
    }
}
