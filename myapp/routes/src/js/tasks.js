(function () {

    var app = {

        init: function () {
            document.querySelector('.to-do-list').addEventListener('click', function (e) {
                // Remove task
                if (e.target.classList.contains('fa-trash-alt')) {
                    app.removeTask(e.target.parentNode.parentNode.parentNode);
                    // Edit Task
                } else if (e.target.classList.contains('fa-edit')) {
                    app.editTask(e.target);
                } else if (e.target.classList.contains('fa-check-circle')) {
                    app.completeTask(e.target.parentNode.parentNode.parentNode);
                    app.removeTask(e.target.parentNode.parentNode.parentNode);
                }
            }, false);
        },

        completeTask: function (task) {
            var complTask = document.querySelector('.done-list');
            const newDoneElem = document.createElement("div");
            newDoneElem.classList.add('task');
            const newDoneElem1 = document.createElement("p");
            newDoneElem.appendChild(newDoneElem1);
            const newDoneElem2 = task.lastElementChild.firstElementChild;
            console.log(newDoneElem2);
            newDoneElem1.appendChild(newDoneElem2);
            complTask.appendChild(newDoneElem);
        },

        editTask: function (task) {
            var row = task.parentNode.parentNode.firstChild;
            row.parentNode.firstChild.contentEditable = "true";
            row.addEventListener("blur", event => {
                return row.contentEditable = "false"
            })
        },

        removeTask: function (task) {
            task.style.opacity = 0;
            setTimeout(function () {
                task.remove();
            }, 400);
        },
    };
    app.init();

})();