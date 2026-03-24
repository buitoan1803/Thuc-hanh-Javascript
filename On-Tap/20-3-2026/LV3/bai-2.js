let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 150}
];

let sum = 0;
for(let i = 0; i < products.length; i++){
    if(products[i].price > 100){
        sum += products[i].price
    }

}
console.log(sum);