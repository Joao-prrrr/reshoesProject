/// Reshoes project
/// Author : Joao Araribá, Louis Saulnier and Bastien Schneider
/// Date : 05.09.2022 v1

const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

const router= require('./router')


app.use('/', router)

app.listen(3000)