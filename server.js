const express = require('express');
const userRouter = require('./routes/userRouter');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbname', () => {
    console.log('connected to mongodb');
})
// mongoose.connect('mongodb://localhost:27017/test')
// .then()=>

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.static('public'))
// app.use(express.urlencoded());
// app.use(express.json());

app.use('/users', userRouter);


app.listen(9000, () => {
    console.log('started server on port 9000')
})

