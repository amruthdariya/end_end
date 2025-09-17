// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const ts = new Date().toISOString().replace(/\D/g, '');

//Login page
test('Login with Service Technician', async ({ page }) => {
    test.setTimeout(60000);

  await page.goto('https://qa-fta.web.app/login');
  await page.locator('.native-wrapper').first().click();
  await page.getByRole('textbox', { name: 'Username' }).fill('st02');
  await page.locator('.ng-untouched.ng-pristine > .input-wrapper > .native-wrapper').click();
  await page.getByRole('textbox', { name: 'Password' }).fill('blubirch@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Inspection Ticket').click();
  await page.getByText('service Request No SR-843355').click();
  await page.getByRole('button', { name: 'Proceed' }).click();

});
