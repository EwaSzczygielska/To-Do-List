(function () {

    var app = {
        init: function () {
            document.querySelector('.to-do-list').addEventListener('click', function (e) {
                // Remove task
                if (e.target.classList.contains('fa-trash-alt')) {
                    app.removeTask(e.target.parentNode.parentNode.parentNode);

                    // Complete Task
                } else if (e.target.classList.contains('fa-check-circle')) {
                    app.completeTask(e.target);
                }
            }, false);
        },
       
        removeTask: function (task) {
            task.style.opacity = 0;
            setTimeout(function () {
                task.remove();
                app.storage('update');
            }, 400);
        },
        completeTask: function (task) {
            task.classList.toggle('task-complete');
            app.storage('update');
        },
    };
    app.init();

})();
