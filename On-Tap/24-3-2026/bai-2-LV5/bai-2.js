const products = [
  {name: "Laptop", price: 1000, quantity: 3},
  {name: "Mouse", price: 20, quantity: 10},
  {name: "Keyboard", price: 150, quantity: 5},
  {name: "Monitor", price: 300, quantity: 0}
];

let result = 0;

for(let item of products){
    if(item.quantity > 0){
        result += item.price * item.quantity;
    }
}
console.log(result);