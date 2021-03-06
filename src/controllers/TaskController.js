const mongoose = require('mongoose');
const Task = mongoose.model('Task');
module.exports = {
    async createTask(req, res) {
        const createdTask = await Task.create(req.body)

        return res.send(createdTask)
    },

    async listAllTasks(req, res) {
        //sorts by priority
        const tasks = await Task.find({}).sort({ "priority": -1 })

        return res.json(tasks)
    },
    async taskDetail(req, res) {
        console.log(req.params.id)
        const task = await Task.findById(req.params.id, (err) => { console.log(err) })

        return res.json(task)
    },
    async deleteTask(req, res) {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)

        return res.json(deletedTask)
    },
}