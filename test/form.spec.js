const { test, expect } = require('@playwright/test');

test('Input Form Submit - Validate form', async ({ page }) => {
await page.goto(
'https://www.testmuai.com/selenium-playground/input-form-demo/'
);

// Verify empty form validation
await page.getByRole('button', {
name: 'Submit',
exact: true
}).click();

await expect(page.locator(':invalid').first()).toBeVisible();

// Fill the required fields
await page.locator('#name').fill('Anisha Test');
await page.locator('#inputEmail4').fill('anisha.test@example.com');
await page.locator('#inputPassword4').fill('TestPass123!');
await page.locator('#company').fill('Test Company');
await page.locator('input[name="website"]').fill('https://example.com');

await page.locator('#seleniumform select').selectOption({
label: 'United States'
});

await page.locator('input[placeholder="City"]').fill('New York');
await page.locator('#inputAddress1').fill('123 Test Street');
await page.locator('#inputAddress2').fill('Suite 100');
await page.locator('#inputState').fill('New York');
await page.locator('#inputZip').fill('10001');

// Check whether any required field is still invalid
const invalidFields = await page.locator('#seleniumform :invalid').evaluateAll(
elements => elements.map(el => ({
id: el.id,
name: el.name,
value: el.value
}))
);

console.log('Invalid fields:', invalidFields);

// Submit the form
await page.locator('#seleniumform button[type="submit"]').click();

await page.waitForTimeout(2000);

console.log('Current URL:', page.url());
console.log(
'Success message:',
await page.locator('.success-msg').allTextContents()
);
console.log(
'Form HTML:',
(await page.locator('#seleniumform').innerText()).slice(-1000)
);

});
