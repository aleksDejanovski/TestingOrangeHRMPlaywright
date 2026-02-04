import { Page } from "@playwright/test";

export default class DashBoardPage {
  constructor(public page: Page) {}

  async testt(Username: string, Pass: string) {
    await this.page.getByPlaceholder("Username").fill(Username);
    await this.page.getByPlaceholder("Password").fill(Pass);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
