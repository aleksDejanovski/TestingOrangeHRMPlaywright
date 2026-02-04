import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async FillLoginForm(Username: string, Pass: string) {
    await this.page.getByPlaceholder("Username").fill(Username);
    await this.page.getByPlaceholder("Password").fill(Pass);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
  async GoTo(url: string) {
    await this.page.goto(url);
  }
}
