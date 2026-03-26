const users = [
    {name: 'Alice', city: 'Hanoi'},
    {name: 'Bob', city: 'HCMC'},
    {name: 'Charlie', city: 'Hanoi'},
    {name: 'David', city: 'Danang'}
]
// Tạo object rỗng
let result = {}; 

for(let user of users){
    let city = user.city;
    if(!result[city]){
        result[city] = [];
    }
    result[city].push(user.name);
}
console.log(result);
// // user 1
// if(!result[users[0].city]){
//     result[users[0].city] = [];
// }
// result[users[0].city].push(users[0].name);

// // user 2
// if(!result[users[1].city]){
//     result[users[1].city] = [];
// }
// result[users[1].city].push(users[1].name);

// // user 3
// if(!result[users[2].city]){
//     result[users[2].city] = [];
// }
// result[users[2].city].push(users[2].name);

// // user 4
// if(!result[users[3].city]){
//     result[users[3].city] = [];
// }
// result[users[3].city].push(users[3].name);

// console.log("Hanoi:", result["Hanoi"]);
// console.log("HCMC:", result["HCMC"]);
// console.log("Danang:", result["Danang"]);