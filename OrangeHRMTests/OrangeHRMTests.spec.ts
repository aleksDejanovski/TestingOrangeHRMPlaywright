import { log } from "node:console";
import { test, expect } from "./Pages/Base";
import LoginPage from "./Pages/LoginPage";
import path from "node:path";
import { ADDRCONFIG } from "node:dns";
import RecruitmentPage from "./Pages/RecruitmentPage";
import DashBoardPage from "./Pages/DashBoardPage";

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

test("Add new qualification for employees", async ({
  loginPage,
  dashboardPage,
  adminPage,
}) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("Admin", "admin123");
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  await dashboardPage.clickAdminButton();
  await expect(adminPage.userManagementHeader).toBeVisible();
  await adminPage.OpenSkills();
  await expect(adminPage.skillsPage).toBeVisible();
  await adminPage.clickAddNewAdmin();
  await expect(adminPage.addSkillsHeding).toBeVisible();
  await adminPage.AddNewName("testSkill");
  await expect(adminPage.skillsTable).toContainText("testSkill");
});

test("add new recruit and verify it is added", async ({
  loginPage,
  recruitmentPage,
  dashboardPage,
}) => {
  await loginPage.goTo("/web/index.php/auth/login");
  await loginPage.fillLoginForm("Admin", "admin123");
  await expect(dashboardPage.dashboardHeader).toBeVisible();
  await recruitmentPage.ClickRecrutmentButton();
  await expect(recruitmentPage.recruitmentHeading).toBeVisible();
  await recruitmentPage.ClickAddNewRecruit();
  await recruitmentPage.SubmitNewRecruter(
    "aleks",
    "dankovski",
    "dekovix@gmail.com",
  );
  await expect(recruitmentPage.recruitmentTable).toContainText("NameJob");
});
