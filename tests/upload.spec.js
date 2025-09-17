// @ts-check
// @ts-ignore
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
// @ts-ignore
import { link } from 'fs';
import fs from 'fs';
import path from 'path';
const ts = new Date().toISOString().replace(/\D/g, '');
const readCsv = require('../utils/readCredentials');
const relpath = '/home/blubirch/Videos/Career/end-end/tests/test-files/credentials.csv';
const credentials = readCsv(relpath);

test('Admin web login', async ({page}) => {
  // await test.setTimeout(60000);

    const loginPage = new LoginPage(page);
    // @ts-ignore
    await loginPage.goto(credentials[0].url);
    // @ts-ignore
    await loginPage.login(credentials[0].username, credentials[0].password);
    await page.getByRole('button', { name: 'Upload Tickets' }).click();
    await page.getByRole('button', { name: 'Upload' }).click();

    
    // tests/csvUpload.spec.js
     
function createCsv(rows = 5, filePath = 'tests/test-files/Ria_tickets.csv') {
  let content = 'CRM Ticket No.,Return Item Article ID,Quantity,Return Item Serial Number 1,Customer Name,Customer Contact Number,PIN Code,City,state,Type of Return,Issue Reported by Customer,Return Processing Location,Branch,Tag ID,Manufacturing Date,Batch,Vendor,Validation Status,Service Partner,Service Executive,Inspection Service Request Number,Customer Resolution Decision,Approval Date,Item Decision\n';
  for (let i = 0; i < rows; i++) {
    content += `CRM${ts},490232465,1,SN${ts},Blubirch${i},8050455805,560011,Bangalore,Karnataka,Dealer,Not working,WS02,Mumbai,TAG${ts},2023-01-1${i},BATCH90${i},Vendor${i},In Policy,Dava,Madhu,INS${ts},Refund,2025-08-1${i},Refund\n`;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(content);
}
module.exports = { createCsv };

// Use the local createCsv function defined above
createCsv(4);

//----- Upload CSV file -----//

  // Path to your CSV file
  const filePath = path.resolve(__dirname, '/home/blubirch/Videos/Career/end-end/tests/test-files/Ria_tickets.csv');

  // Upload the file
  await page.setInputFiles('input[type="file"]', filePath);
  
  // Click the upload/submit button
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByText('Ok').click();

 
});
