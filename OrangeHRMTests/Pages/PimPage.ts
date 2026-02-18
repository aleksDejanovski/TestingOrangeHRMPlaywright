import { Page, Locator } from "@playwright/test";

export default class PimPage {
  readonly PIMButton: Locator;
  readonly PIMHeading: Locator;
  readonly AddButton: Locator;
  readonly AddNewEmployee: Locator;
  readonly FirstNameLocator: Locator;
  readonly LastNameLocator: Locator;
  readonly SaveForm: Locator;
  readonly PersonalData: Locator;

  constructor(private readonly page: Page) {
    this.PIMButton = page.locator("a[href='/web/index.php/pim/viewPimModule']");
    this.PIMHeading = page.getByRole("heading", { name: "PIM" });
    this.AddButton = page.getByRole("button", { name: " Add " });
    this.AddNewEmployee = page.getByRole("heading", { name: "Add Employee" });
    this.FirstNameLocator = page.getByPlaceholder("First Name");
    this.LastNameLocator = page.getByPlaceholder("Last Name");
    this.SaveForm = page.getByRole("button", { name: " Save " });
    this.PersonalData = page.getByRole("heading", { name: "Personal Details" });
  }

  async ClickPimButton() {
    await this.PIMButton.click();
  }

  async CickAddButton() {
    await this.AddButton.click();
  }

  async SubmitNewEmployeeForm(firstname: string, lastname: string) {
    await this.FirstNameLocator.fill(firstname);
    await this.LastNameLocator.fill(lastname);
    await this.SaveForm.click();
    await this.page.waitForTimeout(3000);
  }
}
