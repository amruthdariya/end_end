class MobileLoginScreen {
  constructor(driver) { this.driver = driver; }
  async login(user, pass) {
    await (await this.driver.$('~username_field')).setValue(user);
    await (await this.driver.$('~password_field')).setValue(pass);
    await (await this.driver.$('~login_button')).click();
  }
}
module.exports = MobileLoginScreen;

/////////////////////////////////apk code /////////////////////////////////////////////
const { test } = require('@playwright/test');
const { remote } = require('webdriverio');
const LoginPage = require('../pages/web/LoginPage');
const LoginScreen = require('../pages/mobile/LoginScreen');

test('Web booking and mobile update - cross platform e2e', async () => {
  // Web: Playwright
  const browser = await require('playwright').chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const webLogin = new LoginPage(page);

  await webLogin.goto();
  await webLogin.login('admin', 'admin_password');
  // Add web booking steps (fill, click, extract ticket id)
  // e.g., await page.click('#bookTicket'), etc.

  await browser.close();

  // Mobile: Appium
  const opts = {
    path: '/wd/hub', port: 4723,
    capabilities: {
      platformName: "Android", deviceName: "Android Emulator",
      app: "/path/to/executive-app.apk", automationName: "UiAutomator2"
    }
  };
  const driver = await remote(opts);
  const mobileLogin = new LoginScreen(driver);

  await mobileLogin.login('executive', 'exec_password');
  // Add steps: locate ticket (using ticket id?), update status/comments
  // e.g., await driver.$('~ticket_id_field').setValue(ticketId);

  await driver.deleteSession();
});
