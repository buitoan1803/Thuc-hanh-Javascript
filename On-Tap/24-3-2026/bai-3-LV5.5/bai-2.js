let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 150}
]; 
let html = "<ul>";

for(let item of products){
    if(item.price > 100){
        html += `<li>${item.name} - ${item.price}</li>`
    }
}
html += "</ul>";
console.log(html);