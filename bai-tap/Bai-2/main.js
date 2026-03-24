const products = [
 {id: 1, name: 'Laptop', price: 1000, quantity: 3},
 {id: 2, name: 'Mouse', price: 200, quantity: 3},
 {id: 3, name: 'Keyboard', price: 250, quantity: 5},
 {id: 4, name: 'Monitor', price: 300, quantity: 3},
 {id: 5, name: 'USB', price: 100, quantity: 3},
];

let count = 0;
let total = 0;
let max = products[0].price * products[0].quantity;
let min = max;
let maxProduct = products[0];
let minProduct = products[0];


for(let i = 0 ; i < products.length; i++){
    let money = products[i].quantity * products[i].price;
    
    if(products[i].quantity > 2){
        
        console.log(products[i].name , "-" , money);

        total += money;
        count++;
    }

    if(money > max){
        max = money;
        maxProduct = products[i];
    } 

    if(money < min){
        min = money;
        minProduct = products[i];
    }
}

console.log("Sản phẩm giá cao nhất:", maxProduct.name, "-", max);
console.log("Sản phẩm giá thấp nhất:", minProduct.name, "-", min);
console.log("Số sản phẩm:", count);
console.log("Tổng tiền:", total);   

