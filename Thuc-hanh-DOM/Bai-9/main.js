const btn = document.querySelector("#btn-click");
const input = document.querySelector("#ip-number");
const add = document.querySelector("#btn-add");
const list = document.querySelector("#list");
const time = document.querySelector("#time");

let todo = JSON.parse(localStorage.getItem("todo")) || [
    { text: "123", done: false },
    { text: "456", done: true }
];

render();

function render(){
    list.innerHTML = todo
        .map((item, id) => `
            <li class="${item.done ? 'done' : ''}" data-id="${id}">
                <span class="text">${item.text}</span>
                <div>
                    <button class="done-btn">
                        ${item.done ? "Undo" : "Done"}
                    </button>
                    <button class="edit">Edit</button>
                    <button class="delete">X</button>
                </div>
            </li>
        `)
        .join("");
}

function saveData(){
    localStorage.setItem("todo", JSON.stringify(todo));
}

///// BUTTON TIME (KHÔNG LIÊN QUAN TODO)
btn.addEventListener("click", function(){
    if(btn.textContent === "Hiển thị time"){
        btn.textContent = "Ẩn time";
        time.innerHTML = Date();
    } else {
        btn.textContent = "Hiển thị time";
        time.innerHTML = "";
    }
});

///// FILTER INPUT
input.addEventListener("input", function(){
    let value = input.value.trim();
    value = value.replace(/[^0-9.-]/g, "");

    if((value.match(/-/g) || []).length > 1){
        value = value.replace(/-/g, "");
    }

    if(value.indexOf("-") > 0){
        value = value.replace("-", "");
    }

    if((value.match(/\./g) || []).length > 1){
        let parts = value.split(".");
        value = parts.shift() + "." + parts.join("");
    }

    input.value = value;
});

///// ADD
add.addEventListener("click", function(){
    let value = input.value.trim();
    if(value === "") return;

    todo.push({
        text: value,
        done: false
    });

    input.value = "";
    saveData();
    render();
});
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        add.click();
        input.focus();
    }
});
///// EVENT LIST
list.addEventListener("click", function(e){
    let li = e.target.closest("li");
    if(!li) return;

    let id = Number(li.dataset.id);

    // DELETE
    if(e.target.classList.contains("delete")){
        todo.splice(id, 1);
        saveData();
        render();
    }

    // EDIT
    if(e.target.classList.contains("edit")){
        li.innerHTML = `
            <input class="edit-number" value="${todo[id].text}">
            <button class="save">Save</button>
        `;
        li.querySelector(".edit-number").focus();
    }

    // SAVE
    if(e.target.classList.contains("save")){
        let newValue = li.querySelector(".edit-number").value.trim();

        if(newValue === "") return;

        todo[id].text = newValue; // ✅ giữ object
        saveData();
        render();
    }
    list.addEventListener("keydown", function(e){

        let li = e.target.closest("li");
        if(!li) return;

        let id = Number(li.dataset.id);

        // ENTER → SAVE
        if(e.key === "Enter" && e.target.classList.contains("edit-number")){
            let newValue = e.target.value.trim();
            if(newValue === "") return;

            todo[id].text = newValue;

            saveData();
            render();
        }

        // ESC → CANCEL
        if(e.key === "Escape" && e.target.classList.contains("edit-number")){
            render(); // quay lại UI cũ
        }

    });
    if(e.target.classList.contains("done-btn")){
    todo[id].done = !todo[id].done;
    saveData();
    render();
}
    // TOGGLE DONE
    if(e.target.classList.contains("text")){
        todo[id].done = !todo[id].done;
        saveData();
        render();
    }
});