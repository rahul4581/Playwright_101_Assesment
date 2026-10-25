# Playwright 101

Playwright examples for simple form submission, input form validation, and sliders.

## Running tests on LambdaTest

Install dependencies with `npm ci`, then set `LT_USERNAME` and `LT_ACCESS_KEY`
in your environment. Do not commit credentials to configuration files.

Run all three specs on the platforms configured in `lambdatest.yml`:

```powershell
npx playwright-node-sdk playwright test --config=playwright.config.js
```

To run one spec, append its path, for example `test/form.spec.js`.
The directory is named `test`, not `tests`.

To check test discovery without opening browsers:

```powershell
npx playwright test --list
```
