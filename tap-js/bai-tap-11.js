// let n = Number(prompt("Nhập số:"));

// if(n % 5 === 0 && n % 3 === 0){
//     console.log("BuzzFizz")
// }else if(n % 3 === 0){
//     console.log("Fizz");
// }else if(n % 5 === 0){
//     console.log("Buzz");
// }else{
//     console.log(n)
// }

// Tính năm nhuận
// let year = Number(prompt("Nhập năm:"));

// if(year % 4 === 0 && year % 100 !==0){
//    console.log("Năm nhuận") ;
// }else if(year % 400 === 0){
//     console.log("Năm nhuận") ;
// }else if (year < 0){
//     console.log("Lỗi không đúng") ;
// }else{
//     console.log("Năm thường");
// }

// Máy tính mini
let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let op = prompt("Nhập phép tính (+, -, *, /):");

let result;
// if(b === 0 && op === "/"){
//     console.log("Không thể chia cho 0");
// }else if (op === "+"){
//     console.log("Kết quả:", a + b);
// }else if (op === "-"){
//     console.log("Kết quả:", a - b);
// }else if (op === "*"){
//     console.log("Kết quả:", a * b);
// }else if (op === "/"){
//     console.log("Kết quả:", a / b);
// }else if (op === ""){
//     console.log("Kết quả: không hợp lệ" );
// }

if(op !== "+" && op !== "-" && op !== "*" && op !== "/"){
    console.log("Phép toán không hợp lệ");
}else if(op === "/" && b === 0){
    console.log("Không thể chia cho 0");
}else{
    if(op === "+"){ result = a + b};
    if(op === "-") {result = a - b};
    if(op === "*") {result = a * b};
    if(op === "/") {result = a / b};

    console.log(result)
}


