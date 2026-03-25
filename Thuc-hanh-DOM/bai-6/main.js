const input = document.querySelector("#input-products");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];
let id = 3;

// render
function render(){
    let html = "";
    for(let item of products){
        html += `<li data-id = ${item.id}>${item.name}</li>`;
    }
    list.innerHTML = html;
}

// CREATE

btn.addEventListener("click", function(){
    let value = input.value.trim();
    if(value === "") return;
    products.push({
        id: id,
        name: value
    });

    id++;
    input.value = "";
    render();

})

// DELETE + UPDATE

list.addEventListener("click", function(e){
    if(e.target.tagName !== "LI") return;

    let itemId = Number(e.target.dataset.id);
    let action = prompt("X: Xóa || S: Sửa");

    action = action.toLowerCase();

    // Delete
    if(action === "x" || action === "X"){
        products = products.filter(item => item.id !== itemId);
    }

    // UPDATE

    else if(action === "s" || action === "S"){
        let newName = prompt("Nhập tên mới:");

        if(newName && newName.trim() !== ""){
            for(let item of products){
                if(item.id === itemId){
                    item.name = newName.trim();
                }
            }
        }
    }
    render();
});

render();
