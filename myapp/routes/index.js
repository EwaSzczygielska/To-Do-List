var express = require('express');
const path = require('path');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_list')
  .then(() => console.log('Connected to MongoDb'))
  .catch(err => console.error('Error', err))

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255,
  },
  category: {
    type: String,
    required: false,
    enum: ['home', 'work', 'social']
  },
  priority: {
    type: Number,
    required: true,
    min: 1,
    max: 3
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  deadline: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: ['to-do', 'in-progress', 'done']
  }
});

const Task = mongoose.model('Task', taskSchema);

async function createTask() {
  const task = new Task({
    content: 'test 2 it will pass',
    category: 'home',
    priority: 1,
    status: 'to-do'
  });

  const result = await task.save();
  console.log(result);
}

async function getTasks() {
  const tasks = await Task.find().find(); //in {inside you can enter }
  // for limit .limit(10)
  // to sort sort({priotity: 1});
  console.log(tasks)
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
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

router.get('/src/js/index.js', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/js/index.js'));
});

router.get('/src/js/slider.js', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/js/slider.js'));
});

router.get('/src/js/tasks.js', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/js/tasks.js'));
});

router.get('/src/js/new-task.js', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/src/js/new-task.js'));
});

router.get('/src/js/database.js', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/database.js'));
});

module.exports = router;


//async function removeTask(id) {
//    const task = await Task.deleteOne({_id=id});
//    console.log(result);1
//}



//createTask();
//getTasks();
//updateTask('5cc240d3977c3f07704fd0f4');
//removeTask('5cc240d3977c3f07704fd0f4');