const base = require('@playwright/test');


exports.customtest1 = base.test.extend(
{
testDataForOrder :    {
    username : "balugopal9@gmail.com",
    password : "Password@02",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)