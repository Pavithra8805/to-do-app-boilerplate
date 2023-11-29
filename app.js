const userInput = document.querySelector("#input");
const addBtn = document.getElementById("button");
const parentTodoContainer = document.getElementById("todolist");

let listOfTodos = [];

addBtn.onclick = () => {

    // Strong the todos of user
    listOfTodos.push(userInput.value)

    // clearing the input tag
    userInput.value = "";
    // console.log(listOfTodos);

    // Display todos
    displayTodo();
};

function displayTodo() {
    let newTodo = "";

    listOfTodos.map((todo, index) => {
        newTodo +=`<li>
        ${todo}
        <a onclick="editTodo(${index})">Edit</a>
        <a onclick="deleteTodo(${index})">Delete |</a>
        </li>`;
    });

    parentTodoContainer.innerHTML = newTodo;
}

function deleteTodo(indexValue) {
    // delete a element from any array using splice.
    listOfTodos.splice(indexValue, 1);

    // Display todos
    displayTodo();
}

function editTodo(indexValue) {
    // take input from the user
    let updateTodo = prompt("Please update the todo");

    // Replace the old todo with the new todo/ updated todo
    listOfTodos.splice(indexValue, 1, updateTodo);

    // Display todos
    displayTodo();

}