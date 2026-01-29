// const response = fetch(`https://api.github.com/users`);

// response.then((data) => { return data.json(); }).then((users) => {
//     console.log(users);
// });

const todoInput = document.querySelector("#todo-input");
const addTodo = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const deleteTodo = document.querySelectorAll(".delete-todo");


addTodo.addEventListener("click", () => {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todos");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fi fi-bs-cross-circle class="delete-todo""></i>`;
    deleteBtn.addEventListener(`click`, () => {
        deleteBtn.parentElement.remove();
    });
    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);
    todoInput.value = "";
});


deleteTodo.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});
