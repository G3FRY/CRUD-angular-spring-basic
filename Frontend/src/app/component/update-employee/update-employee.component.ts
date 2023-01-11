import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  id!: Number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee, this.id).subscribe(data => {
      this.goToListEmployees();
    })
  }

  goToListEmployees(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.updateEmployee();
  }

}
