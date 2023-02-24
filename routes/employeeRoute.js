const express = require('express');
const router = express.Router();

const { getAllEmployees, getEmployeeByID, 
        insertEmployee, updateEmployee, 
        deleteEmployee } = require('../controllers/employeeController');


// api/employees
router.get('/', getAllEmployees)    // GET - Get all Employee


// api/employees/add
router.post('/add', insertEmployee)    // POST - Insert an Employee
    

// api/employees/5    
router.route('/:id')
    .get(getEmployeeByID)       // GET - Get Employee By ID
    .delete(deleteEmployee)     // DELETE - Delete Employee
    .put(updateEmployee)        // PUT - Update an Employee


    
module.exports = router;