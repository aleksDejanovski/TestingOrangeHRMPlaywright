import { log } from "node:console";
import { test, expect } from "./Pages/Base";
import LoginPage from "./Pages/LoginPage";
import path from "node:path";

test("Login to Orange HRM using POM", async ({ loginPage, dashboardPage }) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("Admin", "admin123");
  await expect(dashboardPage.dashboardHeader).toBeVisible();
});

test("Login to Orange HRM using invalid credentials", async ({ loginPage }) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("test", "test1234");
  await expect(loginPage.invalidCredentials).toBeVisible();
});

test("Add new admin", async ({ loginPage, dashboardPage, adminPage }) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("Admin", "admin123");
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  await dashboardPage.clickAdminButton();
  await expect(adminPage.userManagementHeader).toBeVisible();
  await adminPage.clickAddNewAdmin();
  await expect(adminPage.addNewUserHeading).toBeVisible();
  await adminPage.SetUpAdminRole();
  await adminPage.SetUpEmployeeName("alekso");
  await adminPage.ClickSave();
});

test("Add new job title", async ({ loginPage, dashboardPage, adminPage }) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("Admin", "admin123");
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  await dashboardPage.clickAdminButton();
  await expect(adminPage.userManagementHeader).toBeVisible();
  await adminPage.ClickJobMenu();
  await adminPage.ClickJobTitles();
  await expect(adminPage.jobTitlesHeading).toBeVisible();
  await adminPage.ClickAddNew();
  await expect(adminPage.addJobTitleHeading).toBeVisible();
  await adminPage.CreateNewJob("aleksjob", "new test job title");
  await expect(adminPage.table).toContainText("new test job title");
});
