const { test, expect } = require('@playwright/test')
//const { request } = require('node:http')

test('Get API request', async ({ request }) => {

    const response = await request.get('https://dummyjson.com/carts/1', {
        Headers: { 'Accept': 'application/json' },


    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
     console.log(response);

    const body = await response.json();
    expect(body).toHaveProperty("id", 1);

});
    test('POST API request', async ({ request }) => {

        const response1 = await request.post('https://dummyjson.com/products/add', {
            Headers: { 'Accept': 'application/json' },
            Payload: {
                "id": 195,
                "title": "BMW Pencil"

            },
   
});
        
    expect(response1.status()).toBe(201);
    expect(response1.ok()).toBeTruthy(); 
    const body1 = await response1.json();
    console.log(response1);
    console.log(body1);
    });


