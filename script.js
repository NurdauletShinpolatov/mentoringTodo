const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const tasksList = document.querySelector(".tasksList");
const clearBtn = document.querySelector(".clear");
const filter = document.querySelector(".filter");

let selectedTask = null;
let selectedStatus = 'all';  // 'completed',  'inProgress'
let tasks = [
  {
    id: "aaaa_1",
    value: "bir",
    completed: false  
  },
  {
    id: "asdsafsdjh",
    value: "ikki nimadur",
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
  console.log(tasks);
  tasksList.innerHTML = ""
  let filteredTasks = tasks.filter(elem => {
    if (selectedStatus == "inProgress") {
      if (elem.completed == false){
        return true
      }
    } else if (selectedStatus == "completed"){
      if (elem.completed == true){
        return true
      }
    } else {
      return true
    }
  })

  filteredTasks.forEach(item => {
    tasksList.innerHTML += `
      <li class="todo" id=${item.id}>
        <input class="toggleCheck" ${item.completed ? 'checked' : ''} type="checkbox" />
        <input 
          ${selectedTask != item.id ? "readonly='readonly'" : ''} 
          value="${item.value}"
          class="todo_input"
          type="text" 
        />
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

const toggleCheck = (taskId) => {
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
  render()
}

const deleteTask = (taskId) => {
  tasks = tasks.filter(item => item.id !== taskId)
  render()
}

const changeSelectedStatus = (e) => {
  selectedStatus = e.target.value;
  render()
}

const enableEdit = (taskId) => {
  selectedTask = taskId;
  render()
}

const cancelEdit = () => {
  selectedTask = null;
  render()
}

const saveEdit = (taskId, e) => {
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

const clickHandler = (e) => {
    const taskId = e.target.closest(".todo").id;
    
    if (e.target.closest(".toggleCheck")) toggleCheck(taskId)
    else if (e.target.closest(".delete")) deleteTask(taskId)
    else if (e.target.closest(".edit")) enableEdit(taskId)
    else if (e.target.closest('.cancel')) cancelEdit()
    else if (e.target.closest('.save')) saveEdit(taskId, e)
}

tasksList.addEventListener("click", clickHandler);
clearBtn.addEventListener("click", clearAll);
form.addEventListener("submit", addNewTask);
filter.addEventListener('change', changeSelectedStatus)