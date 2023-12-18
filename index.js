const input = document.querySelector("#input");
const date = document.querySelector(".date");
const addTask = document.querySelector(".addTask");
const statues = document.querySelector("#status");
const priority = document.querySelector("#priority");
const totalTodos = document.querySelector(".total-todos");



function addTasks(e) {
  e.preventDefault();
  const task = createElement(input.value, date.value);
}
let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];


function createElement(inputVal, dateVal) {
  // Storing Data into Local Storage
    let newTask = {
    input: inputVal,
    date: dateVal,
    priority: priority.value,
    status: statues.value,
  };

  existingTasks.push(newTask);
  if (typeof Storage !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    alert("Data saved successfully");
    getData(); 
  } else {
    alert("Your browser does not support local storage");
  }
}
 



document.addEventListener("DOMContentLoaded", function () {
  getData();
 
});

function getData() {
  const todosTask = document.querySelector(".todo-tasks");

  // console.log(todosTask);
  
//   Displaying total todos
  totalTodos.innerHTML = `TO Do ${existingTasks.length}`

  if (typeof Storage !== "undefined") {
    let storedTask = localStorage.getItem("tasks");

    if (storedTask) {
      let storingString = JSON.parse(storedTask);

      // Clear existing tasks before appending new ones
      todosTask.innerHTML = "";

      storingString.forEach((task, index) => {
        // Create a div for each task
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("tasks");

        // Create a paragraph for the task content
        const taskPara = document.createElement("p");
        taskPara.classList.add("para");

        // Create Button Container

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.classList.add("material-symbols-outlined");
        editBtn.innerHTML = "edit";

        editBtn.addEventListener("click", () => {
          editTask(index);

          location.reload();
        });

        // Delete Button

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("material-symbols-outlined");
        deleteBtn.innerHTML = "delete";

        deleteBtn.addEventListener("click", () => {
          deleteTask(index);
          location.reload();
        });

        btnContainer.append(editBtn, deleteBtn);
        if (task.date) {
          taskPara.innerHTML = `
        
          <strong>${task.input}</strong><br>
          <small>Due Date: ${task.date}</small> &#160 &#160
          <small>Priority: ${task.priority}</small> &#160 &#160
          <small >Status: ${task.status}</small>
          
          `;
        } else {
          taskPara.innerHTML = `
          
          <strong>${task.input}</strong> <br/>
            <small>Status: ${task.priority}</small>&#160 &#160
         
            <small>Status: ${task.status}</small>
             `;
        }

   

        



        // Append the paragraph to the task div
        taskDiv.append(taskPara, btnContainer);

        // Append the task div to the container
        todosTask.appendChild(taskDiv);
      });
    }
  }
}

function editTask(index) {
  let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let newTask = prompt("Enter Updated Task");

  let monthNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  let today = new Date();
  let dates = prompt(
    "Please enter date.",
    today.getDate() +
      "-" +
      monthNames[today.getMonth()] +
      "-" +
      today.getFullYear()
  );

  let Status = prompt("Enter Status");
  let Priority = prompt("Enter Priority");

  if (newTask !== null && existingTasks.length > 0 && Status !== null && Priority !== null ) {
    newTask = newTask.charAt(0).toUpperCase() + newTask.slice(1);
    Status = Status.charAt(0).toUpperCase() + Status.slice(1);
    Priority = Priority.charAt(0).toUpperCase() + Priority.slice(1);

    existingTasks[index].input = newTask;
    existingTasks[index].date = dates;
    existingTasks[index].status = Status;
    existingTasks[index].priority = Priority;
    localStorage.setItem("tasks", JSON.stringify(existingTasks));


   
  }
}
function deleteTask(index) {
  let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (
    existingTasks.length > 0 &&
    confirm("Are you sure you want to delete this task?")
  ) {
    existingTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    // alert("Task has been deleted.");
  }
}

addTask.addEventListener("click", addTasks);
