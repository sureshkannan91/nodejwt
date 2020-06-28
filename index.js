const express = require('express');
const app =express();
const mongoose =require('mongoose');
const userRouter = require('./userRouter');
const morgan = require('morgan');
const cors = require('cors');
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

app.use('/api',userRouter);

//app.use('/',(req,res) => {
 //   res.send("Haiiiii Team");
//})
// server port creation
app.listen(5000,() => {
    console.log("Server Started On 5000");
})

//mongoose db connection
mongoose.connect('mongodb://localhost:27017/userAuth', 
{ useNewUrlParser: true, useUnifiedTopology: true  }, () => {
    console.log("Server connected Successfully");
})