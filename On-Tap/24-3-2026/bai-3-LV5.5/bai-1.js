let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20}
];

let html = "";

for(let item of products){
    html += `<li>${item.name} - ${item.price}</li>`;
}
console.log(html);