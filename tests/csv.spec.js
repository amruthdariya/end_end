import { test } from '@playwright/test';

test.describe.configure({ mode: 'default' });
test.setTimeout(60000);
test('runs first', async ({ page }) => {
    await page.goto('https://www.srsbooking.com');
});
test('runs second', async ({ page }) => {
    await page.goto('https://www.google.com/');
});