const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

window.addEventListener("scroll", () => {
    if (window.scroll >100){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () =>{
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click",() =>{
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
})