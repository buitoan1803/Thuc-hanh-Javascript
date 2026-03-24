let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 150},
  {name: "Monitor", price: 300}
];

let count = 0;

for(let item of products){
    if(item.name.length > 5 && item.price < 500){
        count++;
    }
}
console.log(count);