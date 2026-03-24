let products = [
  {name: "Laptop", price: 1000, quantity: 3},
  {name: "Mouse", price: 20, quantity: 10},
  {name: "Keyboard", price: 150, quantity: 5},
  {name: "Monitor", price: 300, quantity: 0}
];


let maxProduct = null;

for(let item of products){
    if(item.quantity > 0 && item.price > 100){
        if(!maxProduct || item.price > maxProduct.price){
        maxProduct = item;
    }
    }
    
}

console.log("1", maxProduct);