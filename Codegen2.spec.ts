import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByText('Contact Email:')).toBeVisible();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('prueba');
  await page.getByLabel('Contact Email:').fill('testing@prueba.com');
  await page.getByLabel('Message:').fill('testing');
  await expect(page.getByLabel('New message').getByText('Close')).toBeVisible();
  await page.getByRole('button', { name: 'Send message' }).click();
});