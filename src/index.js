document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  let taskMain = document.getElementById("main-content");
  
  
  taskForm.addEventListener("submit", createNewTask)
    
   
    
    
    
    function createNewTask(event){
      event.preventDefault();
      let newTask = document.createElement("li");
      let description = document.querySelector("#new-task-description").value
      newTask.innerText = description;
      let uTaskList = document.querySelector("ul#tasks");
      uTaskList.appendChild(newTask);
      console.log(newTask)
    }
})
