let productDetails = ["pen", "stationary", 12.00,1]

//es5
let productName = productDetails[0];
let  category = productDetails[1];
let price = productDetails[2];
let quantity = productDetails[3];
  console.log(productName)
  console.log(category)
  
//es6

//let [Name, productCategory, pprice, pquantity] = productDetails

let [,,eprice] = productDetails
console.log(eprice)

