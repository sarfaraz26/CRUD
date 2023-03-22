import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  managerEmployees : any = [];
  
  title:String = "Add"

  constructor(private employeeService : EmployeeService){}

  designations:string[] = ['Senior Software Engineer', 
                            'Software Engineer', 
                            'Module Lead', 
                            'Team Lead',
                            'Manager',
                            'Senior Manager',
                            'Senior Database Administrator',
                            'Principal Engineer',
                            'Senior Associate',
                            'Scrum Master'];
  
  ngOnInit(){
    this.employeeService.getManagerEmployees().subscribe((employees) => {
      this.managerEmployees = employees;
    })
  }
    
}
