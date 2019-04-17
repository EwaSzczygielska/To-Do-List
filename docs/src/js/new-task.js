let addbtn = document.getElementsByClassName("add-button");

function addNewTask() {
    let task = document.getElementById("maininput").value();
    let taskContainer = document.querySelector(".to-do-list");
    let newTask = document.createElement('div');
    console.log(task);
    let newDiv = newTask.classList.add('task');
    newDiv.textContent = task;
    taskContainer.appendChild(newDiv);
}

addbtn.addEventListener("click", addNewTask());