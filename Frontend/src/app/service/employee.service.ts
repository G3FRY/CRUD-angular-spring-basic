import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL = "http://localhost:8080/api/employees";

  constructor(private httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}` + "/getAll");
  }
  
  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + "/save", employee);
  }

  getEmployeeById(id: Number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}` + "/getById/" + id);
  }

  updateEmployee(employee: Employee, id: Number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}` + '/update/' + id, employee);
  }

  deleteEmployee(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}` + '/delete/' + id);
  }

}
