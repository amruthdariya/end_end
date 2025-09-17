const { url } = require('inspector');

// pages/LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Enter email ID/phone number/' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    // await this.goto(url);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
