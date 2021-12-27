import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ColorizerDirective } from './products/directives/colorizer.directive';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { UserMatchValidator } from './about/usermatch.directive';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ColorizerDirective,
    EllipsisPipe,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    SignupComponent,
    UserMatchValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // two way binding will work
    ReactiveFormsModule, // reactive forms related
    HttpClientModule // Http Client related module
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule should be bootstrapped with AppComp
})
export class AppModule { }
