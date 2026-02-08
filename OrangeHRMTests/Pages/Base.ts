import { test as Base } from "@playwright/test";
import LoginPage from "./LoginPage";
import DashBoardPage from "./DashBoardPage";
import AdminPage from "./AdminPage";

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashBoardPage;
  adminPage: AdminPage;
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
});

export { expect } from "@playwright/test";
