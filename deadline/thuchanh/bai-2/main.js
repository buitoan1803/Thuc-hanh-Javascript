// (1) BUTTON CLICK ĐỔI TEXT
const btn1 = document.querySelector("#btn-click");
btn1.textContent = "click";

btn1.addEventListener("click", function(){
    if(btn1.textContent === "click"){
        btn1.textContent="clicked"
    }else{
        btn1.textContent = "click"
    };
    
});

// (2) INPUT - BUTTON - DIV (KHÔNG GHI ĐÈ)
const input1 = document.querySelector("#ip-content");
const btn2 = document.querySelector("#btn-add");
const div = document.querySelector("#list");

btn2.addEventListener("click", function(){
    let value = input1.value.trim();
    if(value === "") return;

    let p = document.createElement("p");
    p.textContent = value;
    div.appendChild(p);
    input1.value = "";
});

// (3) INPUT CHỈ CHO NHẬP SỐ
const input2 = document.querySelector("#ip-number");

input2.addEventListener("input", function(){
    let value = input2.value.trim();

    // chỉ giữ lại số, dấu - và .
    value = value.replace(/[^0-9.-]/g, "");

    // Chỉ cho 1 dấu -
    if((value.match(/-/g) || []).length > 1){
        value = value.replace(/-/g, "");
    }
    if(value.indexOf("-") > 0){
        value = value.replace("-", "");
    }

    // Chỉ cho 1 dấu .
    if((value.match(/\./g) || []).length > 1){
        let parts = value.split(".");
        value = parts.shift() + "." + parts.join("");
    }
    input2.value = value;
});

