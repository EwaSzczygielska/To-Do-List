(function () {

    var app = {

        init: function () {
            document.querySelector('.to-do-list').addEventListener('click', function (e) {
                if (e.target.classList.contains('fa-trash-alt')) {
                    app.removeTask(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('fa-edit')) {
                    app.editTask(e.target);
                } else if (e.target.classList.contains('fa-check-circle')) {
                    app.completeTask(e.target.parentNode.parentNode.parentNode);
                    app.removeTask(e.target.parentNode.parentNode.parentNode);
                }
            }, false);
            document.querySelector('.filter').addEventListener('click', function (e) {
                e.preventDefault();
                if (e.target.classList.contains('all')) {
                    app.allSelect(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('home')) {
                    app.homeSelect(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('work')) {
                    app.workSelect(e.target);
                } else if (e.target.classList.contains('social')) {
                    app.socialSelect(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('sort-priority')) {
                    app.prioritySort(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('sort-deadline')) {
                    app.deadlineSort(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('sort-createdate')) {
                    app.dateSort(e.target.parentNode.parentNode.parentNode);
                }}, false);
        },

        completeTask: function (task) {
            var complTask = document.querySelector('.done-list');
            const newDoneElem = document.createElement("div");
            newDoneElem.classList.add('task');
            const newDoneElem1 = document.createElement("p");
            newDoneElem.appendChild(newDoneElem1);
            const newDoneElem2 = task.lastElementChild.firstElementChild;
            newDoneElem1.appendChild(newDoneElem2);
            complTask.appendChild(newDoneElem);
        },

        editTask: function (task) {
            var row = task.parentNode.parentNode.firstChild;
            row.parentNode.firstChild.contentEditable = "true";
            row.addEventListener("blur", event => {
               return row.contentEditable = "false";
            })
        },

        removeTask: function (task) {
            task.style.opacity = 0;
            setTimeout(function () {
                task.remove();
            }, 400);
        },

       allSelect: function (task) {
            console.log('all');
        },

        homeSelect: function (task) {
            console.log('home');
        },

        workSelect: function (task) {
            console.log('work');
        },

        socialSelect: function (task) {
            console.log('social');
        },

        prioritySort: function (task) {
            console.log('priority');
        },

        deadlineSort: function (task) {
            console.log('deadline');
        },

        dateSort: function (task) {
            console.log('date');
        },
    };
    app.init();

})();