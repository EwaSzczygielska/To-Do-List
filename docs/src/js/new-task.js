const addBtn = document.querySelector(".add-button");

let newTask = {
    id: 1,
    message: "",
    priority: "",
    category: "",
    deadline: "",
    createDate: ""
};

addBtn.addEventListener("click", e => {
    e.preventDefault();
    newTask.createDate = Date.now();
    newTask.message = document.forms[0].elements[0].value;
    
    if (document.forms[0].elements[1].checked)  newTask.category = "home";
    if (document.forms[0].elements[2].checked)  newTask.category = "work"; 
    if (document.forms[0].elements[3].checked)  newTask.category = "social"; 
    
    const prioritySlider = document.querySelector('#priority-slider');
    if(prioritySlider.value == 1)   newTask.priority = "1";
    if(prioritySlider.value == 2)   newTask.priority = "2";
    if(prioritySlider.value == 3)   newTask.priority = "3";

    newTask.deadline = document.forms[0].elements[5].value;

    console.log(newTask);
});