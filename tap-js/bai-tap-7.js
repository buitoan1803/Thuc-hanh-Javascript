let a = Number(prompt("Nhập cạnh thứ nhất:"));
let b = Number(prompt("Nhập cạnh thứ hai:"));
let c = Number(prompt("Nhập cạnh thứ ba:"));



if(a + b > c && a + c > b && b + c > a){
    console.log("Đây là tam giác");
} else{
    console.log("Không phải tam giác")
}
