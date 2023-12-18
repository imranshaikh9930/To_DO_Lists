// let items = JSON.parse(localStorage.getItem("tasks")) || [];

// const addTask = document.querySelector(".addTask");
// const input = document.querySelector("#input");

// addTask.addEventListener("click", (e) => {
//   e.preventDefault();

//   let value = input.value;

//   if (value === "") {
//     alert("Please Enter Some Tasks");
//     return;
//   }
// let newTask = {
//     task:value
// }
//   items.push(newTask);

//   localStorage.setItem("Tasks", JSON.stringify(items));

//   listItem();

//   input.value = "";
// });

// function listItem() {
//   let list = "";

//   for (let i = 0; i < items.length; i++) {
//     list += `<li>
//     ${items[i].task}
//    <div class='btn-container'>
//         <button class="material-symbols-outlined"  >
//         edit
//     </button>
//     <button class="material-symbols-outlined" onclick ="deleteItem(${i})">
//         delete
//     </button>
//         </div> </li>`;
//   }
//   document.querySelector(".todo-list").innerHTML = list;
// }

// // listItems();/

// // "<span onclick='deleteItem(" +
// // i +
// // ")'><button class='remove'>Remove</button></span></li>";


// function deleteItem(index){
//     items.splice(index, 1);
//     localStorage.setItem("Tasks", JSON.stringify(items));
//     listItems();
// }


// (function () {
//     listItems();
//   })();