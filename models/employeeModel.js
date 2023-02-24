const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Designation : {
        type : String,
        required : true
    },
    ReportsTo : {
        type : String,
        required : true
    },
    isManager : {
        type : Boolean,
        required : true
    }
},
{
    timestamps : true
})


module.exports = mongoose.model("Employee", employeeSchema);