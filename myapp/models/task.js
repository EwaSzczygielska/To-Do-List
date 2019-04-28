const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    category: {
        type: String,
        required: false,
        enum: ['home', 'work', 'social']
    },
    priority: {
        type: Number,
        required: false,
        min: 1,
        max: 3
    },
    createDate: {
        type: Date,
        required: false,
        default: Date.now()
    },
    deadline: { 
        type: Date,
        required: false,
    },
    status: {
        type: String,
        required: false,
        enum: ['to-do','in-progress','done']
    }
  });
  
  const Task = mongoose.model('Task', taskSchema);

  exports.taskSchema = taskSchema;
  exports.Task = Task;