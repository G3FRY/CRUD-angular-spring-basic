import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router){}

  ngOnInit(){

  }

  createEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      this.goToListEmployees();
    });
  }

  goToListEmployees(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.createEmployee();
  }

}
