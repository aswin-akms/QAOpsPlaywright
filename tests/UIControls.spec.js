const {test,expect} = require ('@playwright/test')

test('UI Controls',async ({page})=> 
{

const userName = page.locator('#username');
const signIn = page.locator('#SignInBtn');
const documentlink = page.locator('[href*="documents-request"]');
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const dropdown = page.locator('select.form-control');
//select[class='form-control']
await dropdown.selectOption("consult");
await page.locator('.radiotextsty').last().click();
await page.locator('#okayBtn').click();
console.log(await page.locator('.radiotextsty').last().isChecked());
await expect ( page.locator('.radiotextsty').last()).toBeChecked();
await page.locator('#terms').click();
await expect (page.locator('#terms')).toBeChecked();
await page.pause();
await page.locator('#terms').uncheck();
expect (await page.locator('#terms').isChecked()).toBeFalsy();
await expect (documentlink).toHaveAttribute('class','blinkingText');
}


);

test.only('Child Windows ',async ({browser})=> {


const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator('#username');
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const documentlink = page.locator('[href*="documents-request"]');
const [newPage]=await Promise.all([
context.waitForEvent('page'),
documentlink.click(),]
)
const text = await newPage.locator('.red').textContent();
const arraytext = text.split('@');
const domain = arraytext[1].split(' ')[0];
//console.log(domain);
await page.locator('#username').fill(domain);
await page.pause();
console.log(await page.locator('#username').inputValue());
});