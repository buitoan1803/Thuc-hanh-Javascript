const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    
    if(text.innerText === "Hello"){
        text.innerText = "Xin chào Toàn";
    }else{
        text.innerText = "Hello"
    }
    
})