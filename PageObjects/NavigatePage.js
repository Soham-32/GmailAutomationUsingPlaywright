import BasePage from "./BasePage";
import LoginData from "../DataFactory/LoginData";

const LoginButton = "//a[text()='Sign in']";
const EmailTextBox = "//input[@id='identifierId']";
const PasswordTextBox = "//input[@type='password']";
const NextButton = "//span[text()='Next']";

export default class NavigatePagePo extends BasePage {
    async loginToGmail() {
        const loginData = LoginData; // Create an instance of LoginData

        await this.page.locator(LoginButton).click();
        await this.page.locator(EmailTextBox).fill(await loginData.FillLoginData().email);
        await this.page.locator(NextButton).click();
        await this.page.locator(PasswordTextBox).fill(await loginData.FillLoginData().password);
        await this.page.locator(NextButton).click();  

    }
} 