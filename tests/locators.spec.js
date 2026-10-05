const {test,expect} = require ('@playwright/test');
const { timeout } = require('../playwright.config');

test('testlocators', async ({page})=>

{
    const slowexpect = expect.configure({timeout : 9000});
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("Password01");
await page.getByRole("button",{name: 'Submit'}).click();
await slowexpect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible();
await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:'Blackberry'}).getByRole("button").click();
});

test('testtimeoutlocators', async ({page})=>

{   test.setTimeout (60000);
const slowexpect = expect.configure({timeout : 9000});
page.setDefaultTimeout(9000);
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("Password01");
await page.getByRole("button",{name: 'Submit'}).click({timeout : 8000});
await slowexpect(page.getByText(" The Form has been submitted successfully!.")).toBeVisible({timeout: 12_000});
await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:'Blackberry'}).getByRole("button").click();
});