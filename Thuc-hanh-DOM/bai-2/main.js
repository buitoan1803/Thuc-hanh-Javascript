let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", function(){
    let value = input.value.trim();
    if(value === "") return;
    list.innerHTML += `<li>${value}</li>`;
    input.value = "";

})

list.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI"){
        if(confirm("Xóa item này?")){
        e.target.remove();
    }
    }
})