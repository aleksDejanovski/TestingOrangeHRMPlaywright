import { test as Base } from "@playwright/test";
import LoginPage from "./LoginPage";
import DashBoardPage from "./DashBoardPage";

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashBoardPage;
};

export const test = Base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashBoardPage(page));
  },
});

export { expect } from "@playwright/test";
