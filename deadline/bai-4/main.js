let ipName = document.querySelector("#name");
let ipAge = document.querySelector("#age");
let btn = document.querySelector("#btn-add");
let list = document.querySelector("#list");


let users = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 25 }
];
render();
function render() {
    list.innerHTML = users
                .map((item, index) => `<li data-id="${index}"> <span>${item.name} - ${item.age}</span> <button class="edit">Edit</button> <button class="delete">x</button></li>`)
                .join("");
}

function saveData(){
    localStorage.setItem("users", JSON.stringify(users));
}

// Thêm 
btn.addEventListener("click", function(){
    let name = ipName.value.trim();
    let age = ipAge.value.trim();
    if( name === "" && age === "") return;
    users.push({
        id: Date.now(),
        name: name,
        age: Number(age),
    });
    ipName.value = "";
    ipAge.value = "";
    saveData();
    render();
});

list.addEventListener("click", function(e){

    // Sửa: 
    if(e.target.classList.contains("edit")){
        let li = e.target.parentElement;
        let id = Number(li.dataset.id);
        let span = li.querySelector("span");

        li.innerHTML = `
        <input class="edit-name" value = "${users[id].name}">
        <input class="edit-age" value = "${users[id].age}">
        <button class="save">Save</button>
        `;
    }

    // Save: 
    if(e.target.classList.contains("save")){
        let li = e.target.parentElement;
        let id = Number(li.dataset.id);
        
        let name = li.querySelector(".edit-name").value.trim();
        let age = li.querySelector(".edit-age").value.trim();

        if(name !== "" && age !== ""){
            users[id].name = name;
            users[id].age = Number(age);

            saveData();
            render();
        }
    }

    // DELETE:
    if(e.target.classList.contains("delete")){
        let id = Number(e.target.parentElement.getAttribute("data-id"));

        users.splice(id, 1);
        saveData();
        render();
    }
});