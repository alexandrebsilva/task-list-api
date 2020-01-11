require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')


const cors = require('cors')

//permite a requisição carregar JSON
app.use(express.json())

//necessario para enviar dados via json 
app.use(cors())

const connection = mongoose.connect('mongodb+srv://task-list-root:' + process.env.DB_PASSWORD + '@cluster0-dm6qu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

requireDir('./src/models')

const Task = mongoose.model('Task')

app.use('/api', require('./src/web/routes.js'))

var server = app.listen(process.env.PORT);