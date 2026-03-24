const texth1 = document.querySelector("#texth1");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    
    if(texth1.innerText === "Hello"){
        texth1.innerText = "Xin chào Toàn";
    }else{
        texth1.innerText = "Hello"
    }
    
})


let btnReview = document.querySelector("#btn-review");
let input = document.querySelector("#input");
let text = document.querySelector("#text");
btnReview.addEventListener("click", function(){
    input.value;
    textp.innerText = input.value;
})