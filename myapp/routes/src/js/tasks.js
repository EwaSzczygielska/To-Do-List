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
                }
                else if (e.target.classList.contains('fa-check-circle')) {
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
          document.getElementsByTagName("p")[0].contentEditable = "true";
          console.log(document.getElementsByTagName("p")[0].firstChild);
          document.getElementsByTagName("p")[0].addEventListener("blur", event => {
                  return document.getElementsByTagName("p")[0].contentEditable = "false";
          });
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

/*var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');

$('.table-add').click(function () {
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
    $TABLE.find('table').append($clone);
});

$('.table-remove').click(function () {
    $(this).parents('tr').detach();
});

$('.table-up').click(function () {
    var $row = $(this).parents('tr');
    if ($row.index() === 1) return; // Don't go above the header
    $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
    var $row = $(this).parents('tr');
    $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
    var $rows = $TABLE.find('tr:not(:hidden)');
    var headers = [];
    var data = [];

    // Get the headers (add special header logic here)
    $($rows.shift()).find('th:not(:empty)').each(function () {
        headers.push($(this).text().toLowerCase());
    });

    // Turn all existing rows into a loopable array
    $rows.each(function () {
        var $td = $(this).find('td');
        var h = {};

        // Use the headers from earlier to name our hash keys
        headers.forEach(function (header, i) {
            h[header] = $td.eq(i).text();
        });

        data.push(h);
    });

    // Output the result
    $EXPORT.text(JSON.stringify(data));
});*/