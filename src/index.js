const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo').then(()=>{
    console.log('Mongo server connected');
    app.listen(5000,()=>{console.log('server running on port 5000');})
})