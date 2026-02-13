import { Page, Locator } from "@playwright/test";

export default class AdminPage {
  readonly dashboardHeader: Locator;
  readonly userManagementHeader: Locator;
  readonly addNewAdminButton: Locator;
  readonly addNewUserHeading: Locator;
  readonly userRolePlaceHolder: Locator;
  readonly employeeName: Locator;
  readonly save: Locator;
  readonly jobMenu: Locator;
  readonly jobTitles: Locator;
  readonly jobTitlesHeading: Locator;
  readonly addNewRole: Locator;
  readonly addJobTitleHeading: Locator;
  readonly addUsername: Locator;
  readonly description: Locator;
  readonly table: Locator;
  readonly qualificationButton: Locator;
  readonly skillsButton: Locator;
  readonly skillsPage: Locator;
  readonly addSkillsHeding: Locator;
  readonly inputNewName: Locator;
  readonly skillsTable: Locator;

  constructor(public page: Page) {
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
    this.userManagementHeader = page
      .getByLabel("Topbar Menu")
      .getByText("User Management");
    this.addNewAdminButton = page.getByRole("button", { name: "Add" });
    this.addNewUserHeading = page.getByRole("heading", { name: "Add User" });
    this.userRolePlaceHolder = page.getByText("-- Select --").first();
    this.employeeName = page.getByPlaceholder("Type for hints...");
    this.save = page.getByRole("button", { name: " Save " });
    this.jobMenu = page.getByText("Job ");
    this.jobTitles = page.getByText("Job Titles");
    this.jobTitlesHeading = page.getByRole("heading", { name: "Job Titles" });
    this.addNewRole = page.getByText(" Add ");
    this.addJobTitleHeading = page.getByRole("heading", {
      name: "Add Job Title",
    });
    this.addUsername = page.locator("input.oxd-input").last();
    this.description = page.getByPlaceholder("Type description here");
    this.table = page.locator(".oxd-table");
    this.qualificationButton = page.getByText("Qualifications ");
    this.skillsButton = page.getByText("Skills");
    this.skillsPage = page.getByRole("heading", { name: "Skills" });
    this.addSkillsHeding = page.getByRole("heading", { name: "Add Skill" });
    this.inputNewName = page.locator("form input");
    this.skillsTable = page.locator(".oxd-table-body");
  }

  async clickAddNewAdmin() {
    await this.addNewAdminButton.click();
  }

  async SetUpAdminRole() {
    await this.userRolePlaceHolder.click();
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async SetUpEmployeeName(name: string) {
    await this.employeeName.fill(name);
  }

  async ClickSave() {
    await this.save.click();
  }

  async ClickJobMenu() {
    await this.jobMenu.click();
  }

  async ClickJobTitles() {
    await this.jobTitles.click();
  }

  async ClickAddNew() {
    await this.addNewRole.click();
  }

  async CreateNewJob(job: string, description: string) {
    await this.addUsername.fill(job + Math.floor(Math.random() * 10000));
    await this.description.fill(description);
    await this.save.click();
    await this.page.waitForTimeout(3000);
  }

  async OpenSkills() {
    await this.qualificationButton.click();
    await this.skillsButton.click();
  }

  async AddNewName(name: string) {
    await this.inputNewName.fill(name + Math.floor(Math.random() * 10000));
    await this.save.click();
    await this.page.waitForTimeout(2000);
  }
}
