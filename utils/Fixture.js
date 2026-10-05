const base = require ('@playwright/test');

const {request} = require ('@playwright/test');
const loginpayload = {userEmail : "balugopal9@gmail.com", userPassword :"Password@02" };

exports.customtest = base.test.extend (
{
authenticatepage : async ({page}, use ) =>
{
//const context = await browser.context();
//const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("balugopal9@gmail.com");
await page.locator("#userPassword").fill("Password@02");
await page.locator("[value='Login']").click();
await page.waitForLoadState("networkidle");
await use(page);

},

createOrder : async ({}, use)=>{

const apiContext = await request.newContext();
const apiUtils = new apiUtils(apiContext, loginpayload);

}
}

);




