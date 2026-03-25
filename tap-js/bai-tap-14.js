// ------ STRING Nâng cao ------ //

// // Bài 1:
// let str = "hello world";
// console.log(str.replace("hello world", "Hello World"))

// // Bài 2: 
// let arr = "apple, banana, orange";
// console.log(arr.split(","));

// // Bài 3: 
// let a = "hello";

// let result = a.split("l").length -1;
// console.log(result);

// // Bài 4: 
// let email = "   test@gmail.com  ";

// let userName = email
//                 .trim()
//                 .includes("@" + "gmail");
// console.log(email);
// console.log(userName);

// ------ ARRAY Nâng cao ------ //

// Bài 1: map
let arr = [1, 2, 3, 4];
let x = arr.map(a => a * 2)
console.log(x);

// Bài 2: filter

let ar = [1, 2, 3, 4];
let count = ar.filter(x => x % 2 === 0)
console.log(count);

// Bài 3: find

let arra = [5, 10, 15, 20];
let coun = arra.find(x => x > 10)
console.log(coun);

// Bài 4: Lấy sản phẩm giá > 100
let products = [
    {name: "a", price: 100},
    {name: "b", price: 200},
    {name: "c", price: 50},
    {name: "d", price: 500}
]
let priceProduct = products.filter(product => product.price > 100);
console.log(priceProduct)

// Bài 5: Lấy tên sản phẩm > 100

let nameProduct = products.filter(pro => pro.price > 100).map(name => name.name)
console.log(nameProduct);

// Bài test não:
let total = products
            .filter(p => p.price > 100) // lọc ra sản phẩm
            .map(p => p.price) // lấy giá sản phẩm biến thành number
            .reduce((total, num) => total + num, 0); // Tính tổng 
    console.log(total)