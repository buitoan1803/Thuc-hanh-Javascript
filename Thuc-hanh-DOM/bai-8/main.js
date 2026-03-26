let input = document.querySelector("#input-products");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list")

let todos = JSON.parse(localStorage.getItem("todos")) || [];
render();
function render(){
    list.innerHTML = todos
            .map((item ,index) => `<li data-id ="${index}"> <span>${item}</span> <button class="edit">Edit</button><button class="delete">X</button></li>`)
            .join("");
};
function saveData(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

btn.addEventListener("click", function(){
    let value = input.value.trim();
    if(value === "") return;
    todos.push(value);
    input.value = "";
    saveData();
    render();
});

list.addEventListener("click", function(e){

    // Delete
    if(e.target.classList.contains("delete")){
        let id = Number(e.target.parentElement.getAttribute("data-id"));

        todos.splice(id, 1);
        saveData();
        render();
    }

    // EDIT
    if(e.target.classList.contains("edit")){
        let li = e.target.parentElement;
        let id = Number(li.dataset.id);
        
        let span = li.querySelector("span");

        li.innerHTML = `
            <input value ="${todos[id]}">
            <button class="save">Save</button>
            `;
    }

    // SAVE
    if(e.target.classList.contains("save")){
        let li = e.target.parentElement;
        let id = Number(li.dataset.id);
        let input = li.querySelector("input");
        let newValue = input.value.trim();

        if(newValue !== ""){
            todos[id] = newValue;
            saveData();
            render();
        }
    }
});
