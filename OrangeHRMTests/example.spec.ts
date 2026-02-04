import { test, expect } from "./Pages/base.ts";
import LoginPage from "./Pages/LoginPage";

test("Login to Orange HRM using POM", async ({ loginPage }) => {
  await loginPage.GoTo(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await loginPage.FillLoginForm("Admin", "admin1234");
});

test("login to Orange HRM", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});
