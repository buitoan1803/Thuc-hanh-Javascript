// Bài 1: Tìm số chẳn, lẻ
let numbers = prompt("Nhập một số:");
if(numbers % 2 === 0){
    console.log("Số chẵn");
} else {
    console.log("Số lẻ");
}

// Bài 2: Kiểm tra mật khẩu:
let password = 12345678;
if(password === 12345678){
    console.log("Mật khẩu chính xác");
} else {
    console.log("Mật khẩu không chính xác");
}

// Bài 3: Tìm số lớn hơn trong hai số:
let a = 10;
let b = 20;
if(a > b){
    console.log("Số lớn hơn là:", a);
} else {
    console.log("Số lớn hơn là:", b);
}

// Bài  4: Kiểm tra số chia hết cho 5
let number = (prompt("Nhập một số:"));
if(number % 5 === 0){
    console.log("Số chia hết cho 5");
}else {
    console.log("Số không chia hết cho 5");
}
