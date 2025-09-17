// tests/login.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

const readCsv = require('../utils/readCredentials');
// const pwd = process.cwd();
// console.log('Current working directory:', pwd);
const relpath = '/home/blubirch/Videos/Career/end-end/tests/test-files/credentials.csv';
const credentials = readCsv(relpath);
const ts = new Date().toISOString().replace(/\D/g, '');
    
//Login page
test.beforeEach('Login with valid credentials', async ({ page }) => {
      test.setTimeout(60000);
      
  
      const loginPage = new LoginPage(page);
      await loginPage.goto(credentials[0].url);
      await loginPage.login(credentials[0].username, credentials[0].password);
      
      
      
      
      const currentPageURL = page.url();
      if (currentPageURL === "https://rims-demo.blubirch.com/api/v2/return-creation") {
        console.log(currentPageURL + " URL is correct");
      } else {
        const errorMsg = await page.locator(".v-toast__text").textContent();
  }
 
});

//Return creation page
test('Create dealer request', async({page}) => { 
    test.setTimeout(60000);
// await page.waitForTimeout(5000)
const returnCreationHeader=await page.locator('//div[text()="Return Creation "]').textContent();
if(returnCreationHeader === "Return Creation "){
const createRequestBtn=page.locator('//span[text()="Create Request"]');
await expect(createRequestBtn).toBeVisible();
await createRequestBtn.click();
await expect(page.locator('//span[text()="Return / Claim Requests"]')).toBeVisible()
await page.locator('//i[@role="button"]').nth(4).click();
await page.getByText('D2C Sales Return').click();
await page.getByLabel("Customer/Entity Name*").fill("Automation");
await page.getByLabel("Contact Number*").fill("8050455805");
await page.getByLabel("Item Location (Address)*").fill("Mumbai");
// await page.waitForTimeout(4000);
await page.evaluate(() => {
  window.scrollBy(0, 500); // scroll down by 500px
});
await page.locator('(//i[@role="button"])[5]').click();
await page.locator('//div[text()="Serial Number"]').click();
await page.locator('(//label[text()="Serial Number"])[1]').fill(ts);
await page.locator('(//label[text()="Article ID"])[1]').fill("493666338");
// await page.waitForTimeout(4000);
await page.evaluate(() => {
  window.scrollBy(0, 500); // scroll down by 500px
});

await expect(page.locator("(//label[text()='Add Tag ID'])[1]")).toBeVisible();
await page.locator("(//label[text()='Add Tag ID'])[1]").fill(`TG${ts}`);

await expect(page.locator("(//label[text()='Add Box ID'])[1]")).toBeVisible();
await page.locator("(//label[text()='Add Box ID'])[1]").fill(`BX${ts}`);
await page.evaluate(() => {
  window.scrollBy(0, 500); // scroll down by 500px
});
const channelDropdown=page.locator("(//div[@class='v-field__input']//input[@type='text'])[8]");
await expect(channelDropdown).toBeVisible();
await channelDropdown.click();
await page.locator("//div[@role='option']//div[text()='Online']").click();
const returnSubtypeDropdown=page.locator("(//div[@class='v-field__input']//input[@type='text'])[9]");
await expect(returnSubtypeDropdown).toBeVisible();
await returnSubtypeDropdown.click();
await page.locator("//div[text()='Physical Damage']").click();
const returnReasonDropdown=page.locator("(//div[@class='v-field__input']//input[@type='text'])[10]");
await expect(returnReasonDropdown).toBeVisible();
await returnReasonDropdown.click();
await page.locator("//div[text()='Damaged on Delivery']").click();
const returnSubReasonDropdown=page.locator("(//div[@class='v-field__input']//input[@type='text'])[11]");
await expect(returnSubReasonDropdown).toBeVisible();
await returnSubReasonDropdown.click();
await page.locator("//div[text()='Broken Handle']").click();

await page.locator('//span[text()="Submit"]').click();

//await page.locator("(//label[text()='Online'])").click();
const [response] = await Promise.all([
    page.waitForResponse(resp => 
      resp.url().includes('https://rims-demo-api.blubirch.com/api/v1/warehouse/return_initiation/return_creations/get_otp_details?&contact_number=8050455805') && resp.status() === 200
    ),
    
  
  ]);


  // Extract JSON response
  const responseBody = await response.json();
  console.log("API Response:", responseBody);
 const otp = responseBody.otp_verifications[0].details.otp; // assuming response has { "otp": "123456" }
  console.log("Captured OTP:", otp);
  await page.getByLabel("Enter OTP").fill(String(otp));
  await page.locator('(//span[text()="Submit"])[2]').click();
  const confmsg= await page.locator("//div[@class='v-card-text text-center']").textContent();
  console.log(confmsg);
  console.log("---");
  await page.locator("//span[text()='Ok']").click();
  }

 await page.locator("(//td/span/a)[1]").click();

 await expect(page.locator('(//p)[28]')).toHaveText('Pending Testing');
 
 // ASM Mobile Login 
 await page.goto('https://qa-fta.web.app/login');
 await page.locator('.native-wrapper').first().click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ST02');
  await page.locator('.ng-untouched.ng-pristine > .input-wrapper > .native-wrapper').click();
  await page.getByRole('textbox', { name: 'Password' }).fill('blubirch@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Inspection Ticket').click();
  await page.getByText('service Request No SR-843355').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});

