import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
          test.setTimeout(60000);

  await page.goto('https://qa-fta.web.app/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ST02');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('blubirch@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Inspection Ticket').click();
  await page.getByText('SR-345061').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('app-activity-action app-header svg').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('textbox', { name: 'Scan Article ID*' }).click();
  await page.getByRole('textbox', { name: 'Scan Article ID*' }).fill('493666338');
  await page.locator('ion-col:nth-child(4) > app-a-input > .ng-untouched > .input-wrapper > .native-wrapper').click();
  await page.getByRole('textbox', { name: 'Scan Serial Number*' }).fill('MN890061');
  await page.getByRole('button', { name: 'Start Activity' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Like New' }).click();
  await page.locator('ion-content').filter({ hasText: 'Packaging Condition Packaging' }).getByRole('img').click();
  await page.locator('body').setInputFiles('/home/blubirch/Pictures/Screenshots/Screenshot from 2025-09-11 23-08-10.png');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Not Good' }).click();
  await page.locator('ion-content').filter({ hasText: 'Physical Condition Physical' }).getByRole('img').click();
  await page.locator('body').setInputFiles('/home/blubirch/Pictures/Screenshots/Screenshot from 2025-09-02 14-46-54.png');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Minor Dents or Scratches' }).click();
  await page.locator('ion-content').filter({ hasText: 'Physical Condition Damage' }).getByRole('img').click();
  await page.locator('body').setInputFiles('/home/blubirch/Pictures/Screenshots/Screenshot from 2025-09-02 14-23-05.png');
  await page.locator('ion-radio').filter({ hasText: 'Left' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').click({
    position: {
      x: 771,
      y: 333
    }
  });
  await page.locator('ion-radio').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('span').filter({ hasText: 'Symptom' }).first().click();
  await page.getByText('Condensor Coil').click();
  await page.getByText('Copper Pipe').click();
  await page.getByText('Condensor Coil xCopper Pipe x').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('span').filter({ hasText: 'Fault Found' }).first().click();
  await page.getByRole('listitem').filter({ hasText: 'Coil Corrosion' }).click();
  await page.getByText('Coil Defective').click();
  await page.getByText('Coil Corrosion xCoil').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('radio', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('radio', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('span').filter({ hasText: 'Parts Defective' }).first().click();
  await page.getByText('None').click();
  await page.locator('span').filter({ hasText: 'None x' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('span').filter({ hasText: 'Parts Missing' }).first().click();
  await page.locator('ng-multiselect-dropdown').getByText('None').click();
  await page.locator('span').filter({ hasText: 'None x' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('span').filter({ hasText: 'Action Required' }).first().click();
  await page.getByText('Part Replacement').click();
  await page.locator('span').filter({ hasText: 'Part Replacement x' }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('ion-radio').filter({ hasText: 'Yes' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('#ion-input-13').click();
  await page.locator('#ion-input-13').fill('1');
  await page.locator('#ion-input-14').fill('2');
  await page.locator('#ion-input-15').fill('3');
  await page.locator('#ion-input-16').fill('4');
  await page.getByRole('button', { name: 'Close Ticket' }).click();
});