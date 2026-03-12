let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let operator = prompt("Nhập toán tử +, -, *, /:");

if(operator === "+"){
    console.log("kết quả:", a + b);
}else if(operator === "-"){
    console.log("Kết quả:", a - b);
}else if(operator === "*"){
    console.log("Kết quả:", a * b);
}else if (operator === "/"){
    console.log("kết quả:", a / b);
}else{
    console.log("Kết quả:", null);
}