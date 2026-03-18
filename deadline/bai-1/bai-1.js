const products = [
 {id: 1, name: 'Laptop', price: 1000, quantity: 3},
 {id: 2, name: 'Mouse', price: 20, quantity: 1},
 {id: 3, name: 'Keyboard', price: 80, quantity: 5},
 {id: 3, name: 'Keyboard', price: 80, quantity: 5},
 {id: 3, name: 'Keyboard', price: 80, quantity: 5}
]

let total = 0;

for( let i = 0 ; i < products.length; i++){
    if(products[i].quantity > 2 ){
        total += products[i].price * products[i].quantity;
    }
    
}
console.log(total)
// let total = 0;

// if (products[0].quantity > 2){
//     total += products[0].price * products[0].quantity;
// }

// if (products[1].quantity > 2){
//     total += products[1].price * products[1].quantity;
// }

// if (products[2].quantity > 2){
//     total += products[2].price * products[2].quantity;
// }

// console.log(total);

