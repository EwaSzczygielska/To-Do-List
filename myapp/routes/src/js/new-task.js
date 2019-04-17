document.addEventListener("DOMContentLoaded", function () {

var addbtn = document.getElementById("add-button");

function addNewTask() {
    var task = document.getElementById("maininput").value;
    var taskContainer = document.querySelector(".to-do-list");
    var newTask = document.createElement('div');
    console.log(task);
    var newDiv = newTask.classList.add('task');
    //taskContainer.appendChild(newDiv);
}

addbtn.addEventListener('click', addNewTask());

});
