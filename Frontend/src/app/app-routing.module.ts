import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './component/detail-employee/detail-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  {path: 'detailEmployee/:id', component: DetailEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
