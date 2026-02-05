import { Page, Locator } from "@playwright/test";

export default class DashBoardPage {
  readonly dashboardHeader: Locator;

  constructor(public page: Page) {
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
  }

  async testt(Username: string, Pass: string) {
    await this.page.getByPlaceholder("Username").fill(Username);
    await this.page.getByPlaceholder("Password").fill(Pass);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
