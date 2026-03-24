let arr = [3, 8, 2, 11, 6, 7, 4, 12, 0, 20];
let max;
let min;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        max = arr[i];
        min = arr[i];
        break;
    }
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max && arr[i] % 2 === 0){
        max = arr[i];
    }

    if(arr[i] < min && arr[i] % 2 === 0){
        min = arr[i];
    }

}
console.log("Số chẵn lớn nhất là:", max);
console.log("Số chẵn bé nhất là:", min);