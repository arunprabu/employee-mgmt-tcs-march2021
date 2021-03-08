import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {


  // employeeData = {
  //   name: '',
  //   email: '',
  //   phone: ''
  // } 

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  gotoHomeHandler(){
    console.log('About to go to Home Page!');
    // redirect the user to home page thru program
    this.router.navigate(['/']);
  }

  handleAddEmployeeSubmit(formData: NgForm){
    //console.log(this.employeeData);
    console.log(formData);
  }

}
