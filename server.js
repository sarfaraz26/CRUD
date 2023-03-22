require('dotenv').config();


//imports
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//routes imports
const employeeRoute = require('./routes/employeeRoute');


//using express
const app = express();

//cors - Allowing client to talk with Server
app.use(cors());


// For getting user input values from client.
app.use(bodyParser.json());



//Mongoose starts
mongoose.connect(process.env.CONNECTION_STRING);

mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
})

mongoose.connection.on('error', (err) => {
    console.log('DB error : ' + err );
})
//ends



//Employee route
app.use('/api/employees', employeeRoute);



//Server Start
app.listen(PORT, function(){
    console.log('Listening to PORT : '+PORT);
})