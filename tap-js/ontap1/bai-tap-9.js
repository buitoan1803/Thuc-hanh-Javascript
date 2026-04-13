let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let c = Number(prompt("Nhập số thứ ba:"));

if (a === b && b === c){
    console.log("Ba số bằng nhau" );
}else if (a > b && a > c){
    console.log("Số lớn nhất là:", a );
}else if(b > a && b > c){
    console.log("Số lớn nhất là:", b );
}else{
    console.log("Số lớn nhất là:", c );
}

