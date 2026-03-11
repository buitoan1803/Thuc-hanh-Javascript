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

// let myName = "Toan";
// let age = 22;

// let info = `My name is ${myName} and I am ${age}`;
// let text = "Hello";
// console.log(text.length);
// console.log(text.replace());
// console.log(text.includes("llo"));
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(info);


// String
let text = "Hello World";

console.log(text.includes("Hello"));

// Number
let a1 = 10;
let b2 = 3;

console.log(a1 % b2);

// boolean
let age = 20;

if(age >= 18){
    console.log("Adult");
}

// BigInt
let a = 9007199254740991n;
let b = 2n;

console.log(a + b);

// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);


// object
let person = {
   name: "Toan",
   age: 22,
   isStudent: true
};
console.log(person.name);
console.log(person["age"]);
console.log(person.isStudent);

// array
let fruits = ["apple","banana","orange"];
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.push("grape"));
console.log(fruits.pop());
console.log(fruits.shift(""));
console.log(fruits.unshift("grape"));



fruits.shift();

console.log(fruits);