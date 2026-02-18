import { Page, Locator } from "@playwright/test";

export default class RecruitmentPage {
  readonly recruitmentButton: Locator;
  readonly recruitmentHeading: Locator;
  readonly addNewRecruit: Locator;
  readonly name: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly saveButton: Locator;
  readonly recruitmentTable: Locator;

  constructor(public page: Page) {
    this.recruitmentButton = page.getByText("Recruitment");
    this.recruitmentHeading = page.getByRole("heading", {
      name: "Recruitment",
    });
    this.addNewRecruit = page.getByText(" Add ");
    this.name = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.email = page.getByRole("textbox", { name: "Type here" }).first();
    this.saveButton = page.getByRole("button", { name: " Save " });
    this.recruitmentTable = page.getByText("Candidate ProfileEditFull");
  }

  async ClickRecrutmentButton() {
    await this.recruitmentButton.click();
  }

  async ClickAddNewRecruit() {
    await this.addNewRecruit.click();
  }

  async SubmitNewRecruter(name: string, lastName: string, email: string) {
    await this.name.fill(name);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.saveButton.click();
    await this.page.waitForTimeout(4000);
  }
}
