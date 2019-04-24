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
                    app.workSelect(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('social')) {
                    app.socialSelect(e.target.parentNode.parentNode.parentNode);
                }
            }, false);
            document.querySelector('.sort-by').addEventListener('click', function (e) {
                e.preventDefault();
                if (e.target.classList.contains('sort-priority')) {
                    app.prioritySort(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('sort-deadline')) {
                    app.deadlineSort(e.target.parentNode.parentNode.parentNode);
                } else if (e.target.classList.contains('sort-createdate')) {
                    app.dateSort(e.target.parentNode.parentNode.parentNode);
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
            task.remove();
            setProgressBar();
        },

        allSelect: function (task) {
            var el1 = task.nextElementSibling.nextElementSibling.firstElementChild;
            var el = el1.querySelectorAll("div");
            var newArr = Array.from(el);
            var i;
            for (i = 0; i < newArr.length; i++) {
                newArr[i].classList.remove('hidden');
            };
        },

        homeSelect: function (task) {
            var el1 = task.nextElementSibling.nextElementSibling.firstElementChild;
            var el = el1.querySelectorAll("div");
            var newArr = Array.from(el);
            var i;
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].lastElementChild.className === 'ctg-home') {
                    newArr[i].classList.remove('hidden');
                } else {
                    newArr[i].classList.add('hidden');
                }
            };
        },

        workSelect: function (task) {
            var el1 = task.nextElementSibling.nextElementSibling.firstElementChild;
            var el = el1.querySelectorAll("div");
            var newArr = Array.from(el);
            var i;
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].lastElementChild.className === 'ctg-work') {
                    newArr[i].classList.remove('hidden');
                } else {
                    newArr[i].classList.add('hidden');
                }
            };
        },

        socialSelect: function (task) {
            var el1 = task.nextElementSibling.nextElementSibling.firstElementChild;
            var el = el1.querySelectorAll("div");
            var newArr = Array.from(el);
            var i;
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].lastElementChild.className === 'ctg-social') {
                    newArr[i].classList.remove('hidden');
                } else {
                    newArr[i].classList.add('hidden');
                }
            };
        },

        prioritySort: function (task) {
            var el1 = (task.parentNode.nextElementSibling.nextElementSibling.firstElementChild);
            var el = el1.querySelectorAll("div");
            var newArr = Array.from(el);
            var newArr1 = [];
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].firstElementChild.nextElementSibling.classList.contains('priority-high')) {
                    newArr1.push(newArr[i]);
                }
            };
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].firstElementChild.nextElementSibling.classList.contains('priority-mid')) {
                    newArr1.push(newArr[i]);
                }
            };
            for (i = 0; i < newArr.length; i++) {
                if (newArr[i].firstElementChild.nextElementSibling.classList.contains('priority-low')) {
                    newArr1.push(newArr[i]);
                }
            };
            for (i = 0; i < newArr.length; i++) {
                el1.appendChild(newArr1[i]);
            };
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


var clearBtn = document.querySelector('.clear-button');

clearBtn.addEventListener('click', function () {
    var tasks = document.querySelector('.done-list').children;
    var len = tasks.length;
    for (var i = 2; i < len; i++) {
        tasks[2].remove();
    }
    setProgressBar();
});

function setProgressBar() {
    var toDoTasksAmount = document.querySelector('.to-do-list').children.length - 1;
    var doneTasksAmount = document.querySelector('.done-list').children.length - 2;
    var progressBar = document.querySelector('#prog-bar');
    progressBar.setAttribute('max', `${toDoTasksAmount + doneTasksAmount}`);
    progressBar.setAttribute('value', `${doneTasksAmount}`);
}