// // Hàm hiển thị hộp thoiaj lên trên trình duyệt cho người dùng
// alert("Hello, World!");
// alert("Welcome to JavaScript programming!");

// // hàm hiển thị hộ nhập liệu lên trên trình duyệt cho người dùng
// prompt("Please enter your name:");

// // ví dụ về khai báo biến
// var name;
// var age;

// // Khởi tạo biến
// var name = "John";
// var age = 25;
// // khai báo hằng số
// const age = 30;


// let myName = prompt("Xin vui lòng nhập tên của bạn:");
// console.log("Tên của bạn là:" + myName);
// console.log("Tên của bạn là:" +myName);
// console.log("Chào mừng " + myName + " đến với lập trình JavaScript!");

// let myString = "xin chào";

// let soA =25;
// let soB = 5;

// console.log("Căn bậc 2 của " + soA + " là: " + soB);

// let myNames = "Toan";
// let age = 22;

// let info = `My name is ${myName} and I am ${age}`;
// let texts = "Hello";
// console.log(text.length);
// console.log(text.replace("Hello", "Hi"));
// console.log(text.includes("llo"));
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(info);


// String
// let text = "Hello World";

// console.log(text.includes("Hello"));

// Number
// let a1 = 10;
// let b2 = 3;

// console.log(a1 % b2);

// // boolean
// let age = 20;

// if(age >= 18){
//     console.log("Adult");
// }

// // BigInt
// let a = 9007199254740991n;
// let b = 2n;

// console.log(a + b);

// // Symbol
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 == id2);


// // object
// let person = {
//    name: "Toan",
//    age: 22,
//    isStudent: true
// };
// console.log(person.name);
// console.log(person["age"]);
// console.log(person.isStudent);

// // array
// let fruits = ["apple","banana","orange"];
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits.push("grape"));
// console.log(fruits.pop());
// console.log(fruits.shift(""));
// console.log(fruits.unshift("grape"));



// fruits.shift();

// console.log(fruits);

// let x = 9007199254740998n;
// let y = BigInt("2");
// console.log(x + y);
// let n = -5;

// if(n){
//    console.log("A");
// }else{
//    console.log("B");
// }
// console.log(Boolean(0));
// let a = true;
// let b = 1;
// console.log(a + b);

// let numbers = [1,2,3];
// numbers.push(5);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(2);
// console.log(numbers);

// console.log(numbers.length);

// let arr = [10,20,30,40];

// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

// let day = 1;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;    case 2:
//         console.log("Tuesday");
//         break;    case 3:
//         console.log("Wednesday");
//         break;    default:
//         console.log("Unknown day");
// }

// let a = 5;
// let b = 3;
// let op = prompt("Nhập toán tử:");

// switch(op){
//     case "+":
//         console.log(a + b);
//         break;

//     case "-":
//         console.log(a - b);
//         break;

//     case "*":
//         console.log(a * b);
//         break;

//     case "/":
//         console.log(a / b);
//         break;

//     default:
//         console.log("Phép tính không hợp lệ");
// }

// let arr = [10, 20, 30]; 
// for (let item of arr) { 
//     console.log(item); 
// }

// let name = "Bùi Toan";
// console.log(name.replace("Bùi", "Bui"));
// console.log(name.replace("Bùi", "BUI"));

// let arr = [3, 7, 2, 9, 5]; 
// let sum = 0;
// let count = 0;
// for(let item of arr){
//     sum +=item;
// }
// console.log(sum);
// for (let item of arr) { if (item >= 5) { count++; } }
// console.log(count);
// arr.push(4); // [1,2,3]
// arr.pop();
// arr.unshift(0, 1);
// console.log(arr);
// console.log(arr.length);




// const products = [
//  {id: 1, name: 'Laptop', price: 1000, quantity: 3},
//  {id: 2, name: 'Mouse', price: 200, quantity: 3},
//  {id: 3, name: 'Keyboard', price: 250, quantity: 5},
//  {id: 4, name: 'Monitor', price: 300, quantity: 3},
//  {id: 5, name: 'USB', price: 100, quantity: 3},
// ];

// products[0].price = 900
// delete products[0].quantity;
// console.log(products[0]);


// let user = { name: "Toan", address: { city: "Ha Noi", district: "Hoan Kiem" } };
// console.log(user);

// let a = {name: "Toan"}; let b = a;

// b.name = "An";

// console.log(a.name); // "An"

// let a = {x:1}; let b = {x:1};

// console.log(a === b); // false
// let a = {name: "Toan"}
// let b = a;
// console.log(b);

// btn.addEventListener("click", function() {
//   console.log("Clicked");
  
// });

// const input = document.querySelector("#name");
// input.value;

// const div = document.createElement("div");
// div.innerText = "Hello";

// document.body.appendChild(div);

// const h1 = document.createElement("h1");
// h1.innerText = "Bùi Toàn";
// document.body.appendChild(h1);

// const greet = (name) => {
//   console.log("Hello" + name);
// };


let item = [1, 2, 3];
let newArr = item.map(item => item * 2);