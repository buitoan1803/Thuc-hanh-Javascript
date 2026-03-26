// ====== CORE ARRAY ====== //
// Bài 1: 
let arr = [2, 4, 6, 7, 9];

let count = arr.filter(ar => ar % 2 != 0 )
            .map(ar => ar * 2);
        console.log(count);
console.log("===================================");

// Bài 2: 
let words = ["hello", "world", "js", "react"];
let result = words.filter(w => w.length > 3)
                .map(w => w.toUpperCase());
                console.log(result);
console.log("===================================");

// ===== ARRAY OBJECT ===== //
// Bài 3
let users = [
  {name: "A", age: 16},
  {name: "B", age: 20},
  {name: "C", age: 18}
];

let ageTotal = users.filter(user => user.age >= 18)
                    . map(user => user.name);
                    console.log(ageTotal);
console.log("===================================");

// Bài 4: 
let products = [
  {name: "A", price: 100},
  {name: "B", price: 200},
  {name: "C", price: 50}
];

let total = products.map(p => ({
  ...p,
  price: p.price + 20
}));
console.log(total);
console.log("===================================");

// ===== REDUCE ===== //
// Bài 5: 
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => {
    if(num % 2 != 0){
        return acc + num;
    }
    return acc;
}, 0 );
console.log(sum);
console.log("===================================");

// Bài 6: 
let number = [10, 5, 20, 8];

let minNumber = number.reduce((min, num) => {
    if(num < min){
        return num;
    }
    return min;
}, number[0]);
console.log(minNumber)
console.log("===================================");

// Bài 7: 
let orders = [
  {id: 1, total: 100},
  {id: 2, total: 200},
  {id: 3, total: 50},
  {id: 4, total: 150}
];

let sumOrder = orders.reduce((acc, item) =>{
    if (item.total > 100){
        return acc + item.total;
    }
    return acc;
} ,0);

console.log(sumOrder);
console.log("===================================");