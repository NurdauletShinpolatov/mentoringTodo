const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const tasksList = document.querySelector(".tasksList");

let tasks = [
  {
    id: "aaaa_1",
    value: "bir",
    completed: false  
  },
  {
    id: "asdsafsdjh",
    value: "ikki",
    completed: false
  },
  {
    id: "hfsdasdf",
    value: "uch",
    completed: false
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
      <li class="todo" id=${item.id}>
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

const clickHandler = (e) => {
  const taskId = e.target.closest(".todo").id;
  tasks = tasks.map(item => {
    if (item.id == taskId) {
       return {
        id: item.id,
        value: item.value,
        completed: !item.completed,
      }
    } else {
      return item
    }
  })
}

tasksList.addEventListener("click", clickHandler)