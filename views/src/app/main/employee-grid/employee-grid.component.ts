import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})

export class EmployeeGridComponent implements OnInit {
  employees : any = [];

  constructor(private employeeService : EmployeeService){
  }

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

}
