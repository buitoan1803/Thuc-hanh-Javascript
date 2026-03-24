let arr = [-3, 5, -1, 2, 0, 7];

let min;



for(let item of arr){
    if(item > 0){
        min = item;
        break;
    }
}

for(let item of arr){
    if(item < min && item > 0){
        min = item;
    }
}
console.log("Số nhỏ nhất > 0:", min);