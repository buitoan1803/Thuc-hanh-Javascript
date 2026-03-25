let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

let todos = [];

btn.addEventListener("click", function(){
    let value = input.value;
    todos.push(value);
    render();
});

function render(){
    list.innerHTML = todos
                    .map(item => `<li>${item}</li>`)
                    .join("");
}
