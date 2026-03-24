let arr = [2, 8, 4, 10, 3, 7];
let count = 0;

for(let i = 0; i < arr.length; i++){
    if (arr[i] > 5){
        count++;
    }
}
console.log(count);