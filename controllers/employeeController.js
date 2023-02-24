//Model import 
let Employee = require('../models/employeeModel');


// Get All Employees
exports.getAllEmployees = async function(req, res) {
    await Employee.find().then(resp => {
        res.send(resp);
    }).catch(err => {
        console.log(err);
    })
}



//Get Employee By ID
exports.getEmployeeByID = function(req, res) {
    Employee.findById(req.params.id).then(resp => {
        res.send(resp)
    }).catch(err => {
        console.log(err);
    })
}



// Insert data into Employee Schema
exports.insertEmployee = async function(req, res){
    const {name, location, age, designation, reportsTo, isManager} = req.body;

    const employee = new Employee({
        Name : name,
        Location : location,
        Age : age,
        Designation : designation,
        ReportsTo : reportsTo,
        isManager : isManager 
    })

    await employee.save().then(resp => {
        res.send(resp);
        console.log("Employee Added");
    }).catch(err => {
        console.log("Error : " + err);
    })
}



// Update Employee data
exports.updateEmployee = function(req, res){

    const {name, location, age, designation, reportsTo, isManager} = req.body;

    const employee = {
        Name : name,
        Location : location,
        Age : age,
        Designation : designation,
        ReportsTo : reportsTo,
        isManager : isManager 
    }

    Employee.findOneAndUpdate({_id : req.params.id}, {$set : employee}).then(resp => {
        res.send(resp);
        console.log("Employee Updated");
    }).catch(err => {
        console.log(err);
    })
}



//Delete Employee data from the Schema
exports.deleteEmployee = function(req, res){
    Employee.findOneAndDelete({_id : req.params.id}).then(resp => {
        res.send(resp);
        console.log("Employee Deleted");
    }).catch(err => {
        console.log(err);
    })
}