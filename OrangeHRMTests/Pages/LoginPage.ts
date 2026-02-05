import { Page, Locator } from "@playwright/test";

export default class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidCredentials: Locator;

  constructor(public readonly page: Page) {
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.invalidCredentials = page.getByText("Invalid credentials");
  }

  async fillLoginForm(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }
}
