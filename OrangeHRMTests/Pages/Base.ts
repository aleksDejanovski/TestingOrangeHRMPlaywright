import { test as Base } from "@playwright/test";
import LoginPage from "./LoginPage";
import DashBoardPage from "./DashBoardPage";
import AdminPage from "./AdminPage";
import RecruitmentPage from "./RecruitmentPage";
import PimPage from "./PimPage";

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashBoardPage;
  adminPage: AdminPage;
  recruitmentPage: RecruitmentPage;
  pimPage: PimPage;
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
  },
  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  },
});

export { expect } from "@playwright/test";
