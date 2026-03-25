//----- LEVEL 1 -----//
// Bài 1
let arr = [1, 2, 3, 4, 5];

let num = arr
        .filter(x => x % 2 === 0)
        .map(x => x *3);
console.log(num);
console.log("========================");

// Bài 2: 
let words = ["apple", "banana", "cat"];

let wordsLength = words.filter(w => w.length > 4).map(w => w.toUpperCase());
console.log(wordsLength);
console.log("========================");

//----- LEVEL 2 -----//
// Bài 3: 
let users = [
  {name: "A", age: 20},
  {name: "B", age: 17},
  {name: "C", age: 25}
];

let names = users.filter(users => users.age > 18)
                . map(users => users.name);
                console.log(names);
console.log("========================")

// Bài 4:
let products = [
  {name: "A", price: 100},
  {name: "B", price: 200},
  {name: "C", price: 50}
];

let pro = products.map(p => {
        if ( p.price >= 100){
                return{
                        name: p.name,
                        price: p.price + 10
                };

        }
        return p;
});

        console.log(pro);
        console.log("========================")

//----- LEVEL 5 -----//
// Bài 5:
let numbers = [1, 2, 3, 4];

let total = numbers.reduce((total, num)=> {
        return total + num;
}, 0);
console.log(total)
console.log("========================")

// Bài 6:

let cal = numbers.reduce((cal, num) => {
        return cal * num
}, 1);
console.log(cal)
console.log("========================")

// Bài 7: 
let number = [10, 5, 20, 8, 30];

let maxNumber = number.reduce((acc, item) => {
        if(item > acc){
                return item; 
        }return acc;
}, number[0]);
console.log(maxNumber);
console.log("========================")

// Bài 8: 

let orders = [
  {id: 1, total: 100},
  {id: 2, total: 200},
  {id: 3, total: 50}
];

let totals = orders.reduce((acc, item) => acc + item.total ,0);
console.log(totals)
console.log("========================")


// Bài 9: 
let user = [
  {name: "A", age: 20},
  {name: "B", age: 17},
  {name: "C", age: 25}
];

let ageTotal = user.reduce((acc, item) => {
        if(item.age >= 18){
                return acc + item.age;
        }
        return acc;
}, 0)
console.log(ageTotal);