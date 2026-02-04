import { test, expect } from "./Pages/base.ts";
import LoginPage from "./Pages/LoginPage";

test("Login to Orange HRM using POM", async ({ loginPage }) => {
  await loginPage.goTo(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await loginPage.fillLoginForm("Admin", "admin1234");
});
