let arr = [3, 6, 9, 2, 15, 4, 18];
let count = 0;

for(let item of arr){
    if(item % 3 === 0 && item > 5){
        count++;
    }
}
console.log(count);