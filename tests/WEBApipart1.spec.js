const {test, expect,request} = require ('@playwright/test')
const loginpayload = {userEmail : "balugopal9@gmail.com", userPassword :"Password@02" };
let token;

test.beforeAll(async() => {

    const apicontext = await request.newContext();
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginpayload
        }


    )

    expect(loginresponse.ok()).toBeTruthy();
    const loginresponsejson = await loginresponse.json();
     token = loginresponsejson.token
   console.log(token);

});

test('', async ({request})=> {





})

test('Place the Order', async ( {page }) =>
{

    page.addInitScript(value =>{
window.localStorage.setItem('token',value)

    },token );
const email = "balugopal9@gmail.com";
const productName = 'ZARA COAT 3';
const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");

const titles =await page.locator(".card-body b").allTextContents();
console.log(titles);
const count = await products.count();
for(let i = 0 ;i < count; ++i)
{
 if (await products.nth(i).locator("b").textContent() === productName)
 {
    await products.nth(i).locator("text= Add To Cart").click();
    break;
 }
}

await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
await expect(bool).toBeTruthy();
await page.locator("text =Checkout").click();

await page.locator("//input[@value='4542 9931 9292 2293']").fill("1234 5678 8765 4321");
const day = page.locator('div.field.small').locator('select').nth(0);
await day.selectOption("10");
const year = page.locator('div.field.small').locator('select').nth(1);
await year.selectOption("25");
//await page.pause();
const cvv= page.locator("//div[@class='payment__cc']//div[2]//input[1]");
await cvv.fill("678");
const cardname = page.locator("//div[@class='payment__info']//div[3]//div[1]//input[1]");
await cardname.fill("balu gopal");
const coupon = page.locator('[name="coupon"]');
await coupon.fill("rahulshettyacademy");
await page.locator('button:has-text("Apply Coupon")').click();
await expect (page.locator("p:has-text('* Coupon Applied')")).toBeVisible();
await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay : 150});
const dropdown1 = page.locator(".ta-results");
await dropdown1.waitFor();
const optionscount = await dropdown1.locator("button").count();

for (let i =0 ; i<optionscount; ++i)

    {
        const text = await dropdown1.locator("button").nth(i).textContent();
    if (text === " India")

        {
            await dropdown1.locator("button").nth(i).click();
            break;

        }

    }

await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);
await page.locator("button[routerlink*='orders']").click();
await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");

for (let i =0 ; i< await rows.count() ; ++i)
{
const roworderid = await rows.nth(i).locator("th").textContent();
 if (orderid.includes(roworderid) )
 {

    await rows.nth(i).locator("button").first().click();
    break;

}
}
 const orderiddetails = await page.locator(".col-text").textContent();
  expect(orderid.includes(orderiddetails)).toBeTruthy();

  //await page.pause();
});