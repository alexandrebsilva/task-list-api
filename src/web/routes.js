const express = require('express')
const routes = express.Router()
const TaskController = require('../controllers/TaskController')

routes.post('/createTask', TaskController.createTask)
routes.get('/listAllTasks', TaskController.listAllTasks)
routes.get('/taskDetail/:id', TaskController.taskDetail)
routes.delete('/deleteTask/:id', TaskController.deleteTask)


module.exports = routes