const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: true
    },
    responsible: {
        type: String,
    },
    priority: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task = new mongoose.model('Task', taskSchema)
