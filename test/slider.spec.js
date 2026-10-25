
const { test, expect } = require('@playwright/test');

test('Drag and Drop Sliders - Set value to 95', async ({ page }) => {
await page.goto('https://www.testmuai.com/selenium-playground/');

await page.getByText('Drag & Drop Sliders', {
exact: true
}).click();

const slider = page.locator('input[type="range"][value="15"]');

await expect(slider).toBeVisible();

await slider.focus();

for (let i = 15; i < 95; i++) {
await page.keyboard.press('ArrowRight');
}

await expect(slider).toHaveValue('95');
});



