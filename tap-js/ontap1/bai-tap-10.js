let a = Number(prompt("Nhập cạnh thứ nhất:"));
let b = Number(prompt("Nhập cạnh thứ hai:"));
let c = Number(prompt("Nhập cạnh thứ ba:"));

if (a <= 0|| b <= 0 || c <= 0){
    console.log("Không phải tam giác");
}else if (a + b <= c || a + c <= b || c + b <= a){
    console.log("Không phải tam giác");
}else if(a === b && b === c) { 
        console.log("Tam giác đều");
}else if(a === b || a === c || c === b){
        console.log("Tam giác cân");
}else{
    console.log("Tam giác thường");
}
