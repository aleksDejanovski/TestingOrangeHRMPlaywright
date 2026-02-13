import { test as Base } from "@playwright/test";
import LoginPage from "./LoginPage";
import DashBoardPage from "./DashBoardPage";
import AdminPage from "./AdminPage";
import RecruitmentPage from "./RecruitmentPage";

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashBoardPage;
  adminPage: AdminPage;
  recruitmentPage: RecruitmentPage;
};

export const test = Base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashBoardPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  recruitmentPage: async ({ page }, use) => {
    await use(new RecruitmentPage(page));
  }
});

export { expect } from "@playwright/test";
