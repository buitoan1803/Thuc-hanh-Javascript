let products = [
  {name: "Laptop", price: 1000},
  {name: "Mouse", price: 20},
  {name: "Keyboard", price: 150}
];

let list = document.querySelector("#product-list");
let html = "";
let btn = document.querySelector("#filter-btn")


for(let item of products){
    html += `<li>${item.name} - ${item.price}</li>`;
    
}
list.innerHTML = html;


btn.addEventListener("click", function(){
    let html = "";
    for(let item of products){ 
        if(item.price > 100){
            html += `<li>${item.name} - ${item.price}</li>`;
        }
    }     
    list.innerHTML = html;
})