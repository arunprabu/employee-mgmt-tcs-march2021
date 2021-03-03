import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in a selector -- Element Selector
  templateUrl: './app.component.html', // html -- template is mandatory -- only one 
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-tcs-march2021';
}
