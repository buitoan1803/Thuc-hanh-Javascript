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
                .map(item => `<li data-id="${item.id}">
                     <span>${item.name} - ${item.age}</span>
                     <div><button class="edit">Edit</button> 
                     <button class="delete">x</button></div></li>`)
                .join("");
}

function saveData(){
    localStorage.setItem("users", JSON.stringify(users));
}

// Thêm 
btn.addEventListener("click", function(){
    let name = ipName.value.trim();
    let age = ipAge.value.trim();

    if( name === "" || age === "" || isNaN(age)) return;
   
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

    let li = e.target.closest("li");
    if(!li) return;

    let id = Number(li.dataset.id);

    // tìm index đúng
    let index = users.findIndex(u => u.id === id);

    // EDIT
    if(e.target.classList.contains("edit")){
        li.innerHTML = `
            <input class="edit-name" value="${users[index].name}">
            <input class="edit-age" value="${users[index].age}">
            <button class="save">Save</button>
        `;
        return;
    }

    // SAVE
    if(e.target.classList.contains("save")){
        let name = li.querySelector(".edit-name").value.trim();
        let age = li.querySelector(".edit-age").value.trim();

        if(name !== "" && age !== "" && !isNaN(age)){
            users[index].name = name;
            users[index].age = Number(age);

            saveData();
            render();
        }
        return;
    }

    // DELETE
    if(e.target.classList.contains("delete")){
        users.splice(index, 1);

        saveData();
        render();
    }
});