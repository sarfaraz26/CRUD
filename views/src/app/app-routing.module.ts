import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { EmployeeFormComponent } from './main/employee-form/employee-form.component';
import { EmployeeGridComponent } from './main/employee-grid/employee-grid.component';
import { StartViewComponent } from './main/start-view/start-view.component';

const routes: Routes = [
  { path: '', component : StartViewComponent },
  { path : 'api/employees', component : EmployeeGridComponent },
  { path : 'about', component : AboutComponent },
  { path : 'api/employees/add', component : EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
