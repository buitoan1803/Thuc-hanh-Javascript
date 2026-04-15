const app = document.querySelector("#app");
const sidebar = document.querySelector("#sidebar");
const desktopBtn = document.querySelector("#desktopBtn")
const mobileBtn = document.querySelector("#mobileBtn")
const userList = document.querySelector("#userList")
const pagination = document.querySelector("#pagination");

let currentPage = 1;

// DESKTOP TOGGLE
desktopBtn.addEventListener("click", () => {
    app.classList.toggle("sidebar-hidden");
});

// MOBILE TOGGLE
mobileBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// Tìm User
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  renderUsers(
    users.map(user => ({
      avatar: "https://i.pravatar.cc/150?u=" + user.id,
      first_name: user.name,
      last_name: "",
      email: user.email
    }))
  );
}

// RENDER USERS

function renderUsers(users){
    userList.innerHTML = users
        .map(
            (user) => `
            <div class="card">
            <img src="${user.avatar}" alt="${user.first_name}" />
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>${user.email}</p>
            </div>
            `
        )
        .join("");
}

// RENDER pagination
function renderPagination(totalPages){
    let buttons = "";

    for(let i = 1; i <= totalPages; i++){
        buttons += `
        <button class="${i === currentPage ? "active" : ""}" onclick="changePage(${i})">
        ${i}
        </button>
        `;
    }

    pagination.innerHTML = buttons;
}

function changePage(page){
    currentPage = page;
    getUsers(currentPage);

}
getUsers(1);