const input = document.querySelector("#ip-work");
const btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let id = 1;
btn.addEventListener("click", function(){
    let value = input.value.trim();
    
    if(value === "")
    return;
    list.innerHTML += `<li data-id = "${id}">${value}</li>`;
    id++;
    input.value = "";
})

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        // hỏi user muốn làm gì
        let action = prompt("Nhập X để xóa, S để sửa: ");

        // xóa 
        if(action === "x" || action ==="X"){
            if(confirm("Bạn chắc chắn xóa công việc này chứ???")){
                e.target.remove();
            }
        }


        // Sửa
        else if(action === "s" || action === "S"){
            let newText = prompt("Nhập nội dung mới:");

            if(newText && newText.trim() !== ""){
                e.target.innerText = newText.trim();            
            }
        }
       
    }

})
