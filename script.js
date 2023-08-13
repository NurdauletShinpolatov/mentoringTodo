const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const tasksList = document.querySelector(".tasksList");
const clearBtn = document.querySelector(".clear");

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


const render = () => {
  console.log("render ishlavotti");
  tasksList.innerHTML = ""
  tasks.forEach(item => {
    tasksList.innerHTML += `
      <li class="todo" id=${item.id}>
        <input class="toggleCheck" type="checkbox" />
        <input value=${item.value} class="todo_input" type="text" />
        <div class="save ">
            <i class='bx bx-sm bxs-save'></i>
        </div>
        <div class="cancel">
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
    console.log(e.target.closest(".toggleCheck"));
    const taskId = e.target.closest(".todo").id;
    
    if (e.target.closest(".toggleCheck")) {
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
    } else if (e.target.closest(".delete")){
        tasks = tasks.filter(item => item.id !== taskId)
        render()
    } 
}

tasksList.addEventListener("click", clickHandler)
clearBtn.addEventListener("click", clearAll);