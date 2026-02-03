const usersContainer = document.querySelector("#users-container");
const url = "https://api.github.com/users";


async function getUsers() {
    const data = await fetch(url);
    const users = await data.json();
    console.log("object");
    users.forEach((user) => {
        usersContainer.innerHTML += `<div class="user">
        <img src="${user.avatar_url}" alt="" class="user-dp" />
        <br />
        <h3 class="user-name">${user.login}</h3>
      </div>`
    });
}

getUsers();