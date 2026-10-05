const {test,expect} = require('@playwright/test');
test('Browser playwright Assigntest', async ( {browser }) =>
{
const context = await browser.newContext();
const page = await context.newPage();
const reg = page.locator(".text-reset");
const firstName = page.locator("#firstName");
const lastName = page.locator("#lastName");
const Email = page.locator("#userEmail");
const Phno = page.locator("#userMobile");
const sel = page.locator("select[formcontrolname='occupation']");
const gen = await page.locator("input[value='Male']");
const pwd =page.locator("#userPassword");
const cpwd =page.locator("#confirmPassword");
const regbtn =page.locator("#login");
//const loginbtn1 =page.locator(".btn btn-primary");
const loginbtn=page.getByRole('button', { name: 'Login' });
const cardTitles = page.locator(".card-body");



await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
console.log(await page.title());
await reg.click();
await firstName.fill("balu9");
await lastName.fill("gopal9");
await Email.fill("balugopal9@gmail.com");
await Phno.fill("9895112233");
await sel.selectOption({ label: 'Student' });

await gen.check();
await pwd.fill("Password@02");
await cpwd.fill("Password@02");
//await page.getByLabel("I am 18 year or Older").check();
await page.locator('input[type="checkbox"]').check();
await regbtn.click();
await loginbtn.click();
await expect(page.locator(".login-title")).toContainText("Log in");
await Email.fill("balugopal7@gmail.com");
await pwd.fill("Password@02");
await regbtn.click();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);
await page.pause();

});
