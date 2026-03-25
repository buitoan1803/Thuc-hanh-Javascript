const input = document.querySelector("#ip-work");
const btn = document.querySelector("#btn");
let list = document.querySelector("#list");

let todos = [];

function render(){
    list.innerHTML = todos
            .map((item, index) => `<li data-id = "${index}">${item}</li>`)
            .join("");

}

btn.addEventListener("click", function(){
    let value = input.value.trim();
    if (value === "") return;
    todos.push(value);
    input.value = "";
    render();
});

list.addEventListener("click", function(e){
    let id = e.target.getAttribute("data-id");

    if(id !== null){
        todos.splice(id, 1);
        render();
    }
});
