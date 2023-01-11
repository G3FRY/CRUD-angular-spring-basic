import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: Number) {
    this.router.navigate(['/updateEmployee', id]);
  }
  
  deleteEmployee(id: Number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        this.getEmployees();
      })
    }
  }
  
  showEmployee(id: Number){
    this.router.navigate(['/detailEmployee', id]);
  }
}
