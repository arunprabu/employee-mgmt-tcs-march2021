import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

// config the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', redirectTo: '/about', pathMatch: 'full' },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'employees', children: [
      { path: '', component: EmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent }, // URL Param is id
    ]
  },
  { path: 'about', component: AboutComponent, canActivate: [ AuthGuard ]},
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

// Decorator
@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
