//  Tìm max và min
let arr = [3, 7, 2, 9, 5];

let max = arr[0];
let min = max;

for(let i = 0; i < arr.length; i++ ){
    if(arr[i] > max){
        max = arr[i];
    }else if(arr[i] < min){
        min = arr[i];
    }
    
}
console.log("số lớn nhất:", max);
console.log("số nhỏ nhất:", min);