var express = require('express');
const path = require('path');
var router = express.Router();

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
  res.sendFile(path.join(__dirname + '/src/js/database.js'));
});

module.exports = router;
