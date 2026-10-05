const {test,expect} = require('@playwright/test');
test('Web Client App login locators', async ( {page }) =>
{
const email = "balugopal9@gmail.com";
const productName = 'ZARA COAT 3';
const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill("Password@02");
await page.getByRole("button",{name:'Login'}).click();
//await page.pause();
await page.waitForLoadState("networkidle");
await page.locator(".card-body b").first().waitFor();
await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name : 'Add To Cart'}).click();

await page.pause();

await page.getByRole("listitem").getByRole("button",{name:"CART"}).click();
await page.locator("div li").first().waitFor();
await expect (page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name :"Checkout"}).click();

await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay : 150});
await page.getByRole("button", {name : "India"}).nth(1).click();
await page.getByText("PLACE ORDER ").click();
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();


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