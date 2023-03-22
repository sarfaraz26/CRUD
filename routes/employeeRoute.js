const express = require('express');
const router = express.Router();

const { getAllEmployees, getEmployeeByID, 
        insertEmployee, updateEmployee, 
        deleteEmployee,
        getManagerEmployees} = require('../controllers/employeeController');


// api/employees
router.get('/', getAllEmployees)    // GET - Get all Employee


// api/employees/add
router.route('/add')
    .get(getManagerEmployees)   // GET - Get Employees who are manager
    .post(insertEmployee)       // POST - Insert an Employee
    

// api/employees/5    
router.route('/:id')
    .get(getEmployeeByID)       // GET - Get Employee By ID
    .delete(deleteEmployee)     // DELETE - Delete Employee
    .put(updateEmployee)        // PUT - Update an Employee


    
module.exports = router;