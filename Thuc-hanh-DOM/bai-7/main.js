// Bài 8: 
let list = document.querySelector(".done");
let todos = [];

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("done");
}   
});

// Bài 9: 
list.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        let id = e.target.parentElement.getAttribute("data-id");

        todos.splice(id, 1);
        render();
    }
});
function render(){
    list.innerHTML = todos
        .map((item, index) => `
            <li data-id="${index}">
                ${item} <button>X</button>
            </li>
        `)
        .join("");
}