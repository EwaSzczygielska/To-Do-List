const express = require('express');
const bodyParser = require('body-parser');
const { Task } = require('../models/Task');

const taskRouter = express.Router();
taskRouter.use(bodyParser.urlencoded({ extended: true }));

taskRouter.get('/', (req, res) => { 

});

taskRouter.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = taskRouter;