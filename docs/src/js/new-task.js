let task = document.querySelector('.add-task-input');
let add = document.querySelector('.add');

add.addEventListener("click", function () {
console.log(task.value);
$('.task').append('<p>' + task.value + '</p>');
});
