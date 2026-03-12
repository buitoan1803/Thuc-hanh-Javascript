function up(){
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;

    let result = Number(a) + Number(b);

    document.getElementById("result").innerText = result;
}

function dow(){
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;

    let result = Number(a) - Number(b);

    document.getElementById("result").innerText = result;
}

function mul(){
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;
    let result = Number(a) * Number(b);

    document.getElementById("result").innerText = result;
}

function div(){
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;
    let result = Number(a) / Number(b);

    document.getElementById("result").innerText = result;
}