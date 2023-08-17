const form = document.querySelector(".form");
const inputAdd = document.querySelector(".input");
const todo = document.querySelector(".todosList");
const noTask = document.querySelector(".noTask");
const btn = document.querySelector(".add");

let task = [];
let selectedId = null;

const handleAddSubmit = (e) => {
  e.preventDefault();
  if (inputAdd.value.length === 0) {
    btn.style.cursor = "no-drop";
  } else {
    task.push({
      value: inputAdd.value,
      completed: false,
      id: String(Date.now()),
    });
    btn.style.cursor = "pointer";
  }
  render();
  form.reset();
};

const render = () => {
  todo.innerHTML = "";
  task.forEach((item) => {
    todo.innerHTML += `

            <li class="todo" id="${item.id}">
                  <input class="toggleCheck" type="checkbox"   />
                  <input ${selectedId != item.id ? "readonly='readonly'" : ''}  value=${
                    item.value
                  } class="todo_input" type="text" />
                 <div class="save ${selectedId != item.id ? "none" : ""}">
                    <i class="bx bx-sm bxs-save"></i>
                 </div>
               <div class="cancel ${selectedId != item.id ? "none" : ""}">
                 <i class="bx bx-sm bx-x"></i>
               </div>
                <div class="edit ${selectedId == item.id ? "none" : ""} ">
                 <i class="bx bx-sm bxs-pencil"></i>
               </div>
               <div class="delete ${selectedId == item.id ? "none" : ""}" >
                 <i class="bx bx-sm bx-trash"></i>
               </div>
            </li>
            `;
  });

  if (task.length === 0) {
    noTask.style.display = "block";
  } else {
    noTask.style.display = "none";
  }
};
render();

const clearAll = () => {
  task = [];
  render();
};

const save = document.querySelector(".save");

const clickHanlder = (e) => {
  const taskId = e.target.closest(".todo").id;

  if (e.target.closest(".delete")) {
    task = task.filter((item) => item.id !== taskId);
    render();
  } else if (e.target.closest(".toggleCheck")) {
    task = task.map((item) => {
      if (item.id === taskId) {
        return {
          id: item.id,
          value: item.value,
          completed: !item.completed,
        };
      } else {
        return item;
      }
      
    });
  } else if (e.target.closest(".edit")) {
    selectedId = taskId;
    render();
  } else if (e.target.closest(".save")) {
    const inputValue = e.target.closest(".todo").querySelector(".todo_input").value;
    task = task.map(item => {
      if(item.id == taskId){
        return {
          id: item.id,
          value: inputValue,
          completed: item.completed,
        };
      } else{
        return item
      }
    })
    
    
    selectedId = null;
    render();
  } else if(e.target.closest('.cancel')){
    selectedId = null
    render()
  }
};

todo.addEventListener("click", clickHanlder);
form.addEventListener("submit", handleAddSubmit);