let products = [
  {name: "Laptop"},
  {name: "Mouse"},
  {name: "Laptop"},
  {name: "Keyboard"},
  {name: "Mouse"},
  {name: "Laptop"}
];

let countMap = {};
let max = 0;
let result = "";

for(let item of products){
    let name = item.name
    if(countMap[name]){
        countMap[name]++;
    }else{
        countMap[name] = 1;
    }
    
}

for(let key in countMap){
    if(countMap[key] > max){
        max = countMap[key];
        result = key;
    }
}
console.log(result);




