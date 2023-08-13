const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const tasksList = document.querySelector(".tasksList");
const clearBtn = document.querySelector(".clear");

let selectedTask = null;
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
  form.reset()
  render()
}

const clearAll = () => {
  tasks = []
  render()
}

const render = () => {
  console.log("render ishlavotti");
  tasksList.innerHTML = ""
  tasks.forEach(item => {
    tasksList.innerHTML += `
      <li class="todo" id=${item.id}>
        <input class="toggleCheck" ${item.completed ? 'checked' : ''} type="checkbox" />
        <input ${selectedTask != item.id ? "readonly='readonly'" : ''} value=${item.value} class="todo_input" type="text" />
        <div class="save ${selectedTask != item.id ? 'none' : ''}">
            <i class='bx bx-sm bxs-save'></i>
        </div>
        <div class="cancel ${selectedTask != item.id ? 'none' : ''}">
            <i class='bx bx-sm bx-x'></i>
        </div>
        <div class="edit ${selectedTask == item.id ? 'none' : ''}">
            <i class="bx bx-sm bxs-pencil"></i>
        </div>
        <div class="delete ${selectedTask == item.id ? 'none' : ''}">
            <i class="bx bx-sm bx-trash"></i>
        </div>
      </li>
    `
  });
}

render()

const toggleCheck = () => {
  tasks = tasks.map(item => {
    if (item.id == taskId) {
      return {
        id: item.id,
        value: item.value,
        completed: !item.completed
      }
    } else {
    return item
    }
  })
}

const deleteTask = () => {
  tasks = tasks.filter(item => item.id !== taskId)
  render()
}

const clickHandler = (e) => {
    const taskId = e.target.closest(".todo").id;
    
    if (e.target.closest(".toggleCheck")) toggleCheck()
    else if (e.target.closest(".delete")) deleteTask()
    else if (e.target.closest(".edit")){
      selectedTask = taskId;
      render()
    } else if (e.target.closest('.cancel')){
      selectedTask = null;
      render()
    } else if (e.target.closest('.save')){
      let newValue = e.target.closest(".todo").querySelector('.todo_input').value
      tasks = tasks.map(item => {
        if (item.id == taskId) {
          return {
            id: item.id,
            value: newValue,
            completed: item.completed,
          }
        } else {
          return item
        }
      })
      selectedTask = null
      render()
    }
}

tasksList.addEventListener("click", clickHandler);
clearBtn.addEventListener("click", clearAll);
form.addEventListener("submit", addNewTask);