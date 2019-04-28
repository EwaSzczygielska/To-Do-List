const path = require('path');
const {Task} = require('../models/task');
const express = require('express');
const router = express.Router();

/* GET home page. */

router.get('/', async (req, res) => {
 // const genres = await Genre.find().sort('name');
  const tasks = await Task.find().find();
  console.log(tasks);
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

router.get('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/style.css'));
});

router.get('/src/img/logo.png', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/img/logo.png'));
});

router.get('/src/img/main-bg.svg', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/img/main-bg.svg'));
});

//router.get('/slider.js', function (req, res, next) {
//  res.sendFile(path.join(__dirname + '/slider.js'));
//});

//router.get('/tasks.js', function (req, res, next) {
// res.sendFile(path.join(__dirname + '/tasks.js'));
//});

//router.get('/new-task.js', function (req, res, next) {
 // res.sendFile(path.join(__dirname + '/new-task.js'));
//});



router.post('/add', async (req, res) => {
 
  let task = new Task({
    content: req.body.content,
    category: req.body.category,
    priority: req.body.priority,
    status: req.body.status
  });

  const result = await task.save();
  console.log(result);  
  res.redirect('/');
});

/*async function createTask() {
  const task = new Task({
      content: req.body.content,
      category: req.body.category,
      priority: req.body.priority,
      status: req.body.status
  });
  
  const result = await task.save();
  console.log(result);  
}*/


async function getTasks() {
  const tasks = await Task.find().find();//in {inside you can enter }
  // for limit .limit(10)
  // to sort sort({priotity: 1});
  console.log(tasks);
}

async function updateTask(id) {
  const task = await Task.findById(id);
  if (!task) return;
  task.set({
      status: 'done'
  });
  const result = await task.save();
  console.log(result);
}


//async function removeTask(id) {
//    const task = await Task.deleteOne({_id=id});
//    console.log(result);1
//}



// createTask();
// getTasks();
//updateTask('5cc240d3977c3f07704fd0f4');
//removeTask('5cc240d3977c3f07704fd0f4');




module.exports = router;
