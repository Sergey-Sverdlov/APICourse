const express = require('express')
const courseRouter = require('./routes/routes_course')
const userRouter = require('./routes/routes_user')

const PORT = 8082
const hostname = '127.0.0.1';
const app = express()
app.use(express.json())
app.use('/', courseRouter)
app.use('/', userRouter)


app.listen(PORT, () => {
    console.log('Сервер работает')
    })