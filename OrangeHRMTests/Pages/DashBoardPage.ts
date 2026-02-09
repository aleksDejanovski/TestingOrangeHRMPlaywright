import { Page, Locator } from "@playwright/test";

export default class DashBoardPage {
  readonly dashboardHeader: Locator;
  readonly adminButton: Locator;

  constructor(public page: Page) {
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
    this.adminButton = page.getByRole("link", { name: "Admin" });
  }

  async testt(Username: string, Pass: string) {
    await this.page.getByPlaceholder("Username").fill(Username);
    await this.page.getByPlaceholder("Password").fill(Pass);
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async clickAdminButton() {
    await this.adminButton.click();
  }
}
