const addBtn = document.querySelector(".add-button");
const toDoList = document.querySelector(".to-do-list");

addBtn.addEventListener("click", e => {
    e.preventDefault();
    const currentDate = new Date();
    const idCounter = toDoList.childElementCount;
    let newTask = {
        id: idCounter,
        message: " " /*+ idCounter + ". " */+ document.forms[0].elements[0].value + " ",
        priority: document.forms[0].elements[4].value,
        category: "",
        deadline: /*"Deadline: " + */document.forms[0].elements[5].value,
        createDate: currentDate.getDate() + "." + 
                    (currentDate.getMonth()+1) + "." +
                    currentDate.getFullYear()
    };
    if (document.forms[0].elements[1].checked)  newTask.category = "home";
    if (document.forms[0].elements[2].checked)  newTask.category = "work"; 
    if (document.forms[0].elements[3].checked)  newTask.category = "social";
    
    const newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task");
    const priorityIndicator = document.createElement("i");
    priorityIndicator.classList.add("priority-icon", "fas", "fa-dot-circle");

    if (newTask.priority == "1") priorityIndicator.classList.add("priority-low");
    else if (newTask.priority == "2") priorityIndicator.classList.add("priority-mid");
    else if (newTask.priority == "3") priorityIndicator.classList.add("priority-high");

    const actionIcons = document.createElement("span");
    const checkIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");
    checkIcon.classList.add("action-icon", "far", "fa-check-circle");
    editIcon.classList.add("action-icon", "far", "fa-edit");
    deleteIcon.classList.add("action-icon", "fas", "fa-trash-alt");
    actionIcons.appendChild(checkIcon);
    actionIcons.appendChild(editIcon);
    actionIcons.appendChild(deleteIcon);

    const taskContent = document.createElement("p");
    const taskContent1 = taskContent.appendChild(document.createElement("span"));
    taskContent1.classList.add('taskText');
    taskContent1.appendChild(document.createTextNode(newTask.message));
    taskContent.appendChild(actionIcons);
    const deadline = document.createElement("span");
    deadline.classList.add('deadline');
    deadline.appendChild(document.createTextNode(newTask.deadline));
    newTaskElement.appendChild(taskContent);
    newTaskElement.appendChild(deadline);

    if (newTask.category == "home") taskContent.classList.add("ctg-home");
    else if (newTask.category == "work") taskContent.classList.add("ctg-work");
    else if (newTask.category == "social") taskContent.classList.add("ctg-social");

    newTaskElement.appendChild(priorityIndicator);
    newTaskElement.appendChild(taskContent);
    toDoList.appendChild(newTaskElement);

    document.querySelector("#add-task-form").reset();
    let slider = document.querySelector('#priority-slider');
    slider.classList.remove("slider1");
    slider.classList.remove("slider2");
    slider.classList.add("slider");
    setProgressBar();
});