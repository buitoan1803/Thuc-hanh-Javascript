let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 150},
];

let result = [];

for (let item of products){
    if(item.price > 100){
        result.push(item.name);
    }
}
console.log(result);