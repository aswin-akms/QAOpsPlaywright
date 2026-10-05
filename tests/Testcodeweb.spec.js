const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');
test.describe('Login Functionality', () => {
    test('LoginTest SauceDemo', async ({ page }) => {
        const Username = 'standard_user';
        const Password = 'secret_sauce';
        const btn = page.locator('#login-button');
        await page.goto('https://www.saucedemo.com/');
        await page.pause();
        await page.locator('#user-name').fill(Username);
        await page.locator('#password').fill(Password);
        await btn.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    
});


test.only('Sort page', async ({ page }) => {

    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const btn = page.locator('#login-button');
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(Username);
    await page.locator('#password').fill(Password);
    await btn.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.locator('.product_sort_container').click();
    await page.locator('.product_sort_container').selectOption({value:'za'});
   

    await page.locator('.product_sort_container').selectOption({value:'hilo'});
    //await opt.click();
    await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();



});

test('Add to cart', async ({page})=>{
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const btn = page.locator('#login-button');
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(Username);
    await page.locator('#password').fill(Password);
    await btn.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.locator('.product_sort_container').click();
    await page.locator('.product_sort_container').selectOption({value:'za'});
   

    await page.locator('.product_sort_container').selectOption({value:'hilo'});
    //await opt.click();
    await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();

    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.pause();
    await expect(page.locator('.inventory_item_name',{hasText:'Sauce Labs Fleece Jacket'})).toBeVisible();
    await expect(page.locator('.inventory_item_name',{hasText:'Sauce Labs Bolt T-Shirt'})).toBeVisible(); 

    await page.locator('#checkout').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.locator('#first-name').fill('standard');
    await page.locator('#last-name').fill('user');
    await page.locator('#postal-code').fill('682312');
    await page.locator('#continue').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.inventory_item_name',{hasText:'Sauce Labs Fleece Jacket'})).toBeVisible();
    await expect(page.locator('.inventory_item_name',{hasText:'Sauce Labs Bolt T-Shirt'})).toBeVisible(); 
    await expect (page.locator('.summary_subtotal_label')).toBeVisible();
    const total = await page.locator('.summary_subtotal_label').innerText();
    //await expect(total).toBeVisible();
    //await expect(total).toHaveText('Item total: $');

    console.log(total); // Output: "Item total: $45.98"
    await page.locator('#finish').click();
    await expect( page.getByText('Thank you for your order!')).toBeVisible();
    
    
    await page.locator('#back-to-products').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    

   
})
});