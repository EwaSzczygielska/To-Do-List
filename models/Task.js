const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content:{
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
        enum: ['to-do','in-progress','done']
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };