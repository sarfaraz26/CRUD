import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string = 'http://localhost:1192/api/employees'

  constructor(private http : HttpClient) 
  {

  }

  // Get All Employees
  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  //Get Employees who are manager.
  getManagerEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.baseUrl}/add`)
  }
}
