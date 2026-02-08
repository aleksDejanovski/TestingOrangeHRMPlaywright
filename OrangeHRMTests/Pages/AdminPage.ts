import { Page, Locator } from "@playwright/test";

export default class AdminPage {
  readonly dashboardHeader: Locator;
  readonly userManagementHeader: Locator;
  readonly addNewAdminButton: Locator;
  readonly addNewUserHeading: Locator;

  constructor(public page: Page) {
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
    this.userManagementHeader = page
      .getByLabel("Topbar Menu")
      .getByText("User Management");
    this.addNewAdminButton = page.getByRole("button", { name: "Add" });
    this.addNewUserHeading = page.getByRole("heading", { name: "Add User" });
  }

  async clickAddNewAdmin() {
    await this.addNewAdminButton.click();
  }
}
