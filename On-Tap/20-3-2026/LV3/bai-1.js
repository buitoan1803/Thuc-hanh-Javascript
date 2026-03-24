let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20000},
  {name: "Keyboard", price: 50},
  {name: "Keyboard", price: 500000},
];
let maxproducts = products[0];

for(let i = 0; i < products.length; i++){
    if(products[i].price > maxproducts.price){
        maxproducts = products[i]
    }
}
console.log(maxproducts);
