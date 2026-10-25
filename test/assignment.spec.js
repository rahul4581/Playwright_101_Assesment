const { test, expect } = require('@playwright/test');

test('Simple Form Demo Verify message', async ({ page }) => {

// Open Selenium Playground
await page.goto('https://www.testmuai.com/selenium-playground/');

// Open Simple Form Demo
await page.getByText('Simple Form Demo', {
exact: true
}).click();

// Verify URL
await expect(page).toHaveURL(/simple-form-demo/);

// Enter message
const message = 'Welcome to TestMu AI';

await page.getByPlaceholder('Please enter your Message').fill(message);

// Click button
await page.getByRole('button', {
name: 'Get Checked Value'
}).click();

// Verify output
await expect(page.locator('#message')).toHaveText(message);

});
