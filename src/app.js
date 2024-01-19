const express = require('express')
const app = express();
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.options( "*" , cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/v1', routes)



module.exports = app;