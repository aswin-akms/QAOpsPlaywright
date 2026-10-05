const {test,expect,request} = require ('@playwright/test');
const {customtest} = require ("../utils/Fixture.js");



customtest('Fixture Demo', async ({authenticatepage, createOrder}) =>
    
    {

     await authenticatepage.goto("https://rahulshettyacademy.com/client");
    await authenticatepage.locator("button[routerlink*='myorders']").click();
    await authenticatepage.locator("tbody").waitFor();
});