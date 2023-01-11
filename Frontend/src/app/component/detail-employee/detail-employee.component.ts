import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  id!: Number;
  employee!: Employee;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService){}

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      })
  }

}
