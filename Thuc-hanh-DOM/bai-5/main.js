let text = document.querySelector("#input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let id = 1;

btn.addEventListener("click", function(){
    let value = text.value.trim();

    if(value === "") return;
    list.innerHTML += `<li data-id = "${id}">${value}</li>`;
    id++;
    text.value = "";
})

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        let action = prompt("Nhập X nếu xóa, S nếu sửa");

        // Xóa sản phẩm
        if(action === "x" || action === "X"){
            if(confirm ("Bạn có chắc muốn xóa không? "))
            e.target.remove();
        }

        // Sửa sản phẩm
        else if(action === "s" || action === "S"){
            let newProduct = prompt("Nhập thông tin sản phẩm mới:");

            if(newProduct && newProduct.trim() !=="" ){
                e.target.innerText = newProduct.trim();
            }
        }
        console.log(e.target.dataset.id)
    }
})