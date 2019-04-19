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
            var compl_task = document.createElement('div');
            //compl_task.parentNode.classList.add('done-list');
            compl_task = task.innerText;
        },

        editTask: function (task) {
            var row = task.parentNode.parentNode.firstChild;
            console.log(row);
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