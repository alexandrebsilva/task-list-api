const mongoose = require('mongoose');
const Task = mongoose.model('Task');
module.exports = {
    async createTask(req, res) {
        Task.create(
            req.body,
            //first item : error, if exists
            //second item : the created object
            (err, reqData) => {
                console.log(reqData)
            })

        return res.send("newTask gravada")
    },

    async listAllTasks(req, res) {
        const tasks = await Task.find({})
        console.log(tasks)
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