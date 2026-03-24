let products = [
  {name: "Laptop"},
  {name: "Mouse"},
  {name: "Keyboard"},
  {name: "Monitor"},
];

let count = 0;

for(let item of products){
    if(item.name.includes("o")){
        count++;
    }
}
console.log(count);