const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const tasksList = document.querySelector(".todosList");

let tasks = [
  {
    value: "bir"
  },
  {
    value: "ikki"
  }
]

const addNewTask = (e) => {
  e.preventDefault();
  console.log("addNewTask ishlavotti");
  tasks.push({
    value: inputAdd.value,
    completed: false,
    id: String(Date.now())
  })
  render()
}

const clearAll = () => {
  tasks = []
  render()
}

form.addEventListener("submit", addNewTask);

const render = () => {
  console.log("render ishlavotti");
  tasksList.innerHTML = ""
  tasks.forEach(item => {
    tasksList.innerHTML += `
      <li class="todo">
        <input class="toggleCheck" type="checkbox" />
        <input value=${item.value} class="todo_input" type="text" />
        <div class="save none">
            <i class='bx bx-sm bxs-save'></i>
        </div>
        <div class="cancel none">
            <i class='bx bx-sm bx-x'></i>
        </div>
        <div class="edit">
            <i class="bx bx-sm bxs-pencil"></i>
        </div>
        <div class="delete">
            <i class="bx bx-sm bx-trash"></i>
        </div>
      </li>
    `
  });
}

render()