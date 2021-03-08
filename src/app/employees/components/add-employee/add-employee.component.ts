import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 1: Have the form tag equivalent -- ts side 
  addEmployeeForm = new FormGroup({
    // Step 2:  Have the input el equivalents 
    name: new FormControl('', Validators.required ), // Step 5: Let's work on validation -- Refer HTML for Step 6
    phone: new FormControl('', Validators.required ), // TODO: work on min length and max length for phone number
    email: new FormControl('', [ Validators.required, Validators.email ] )
  });
  // Refer add-employee.comp.html for Step 3

  constructor() { }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(){
    console.log(this.addEmployeeForm);  // react form's state will be within


    // send the above data to the employee service 
    // get the res from the service
    // upon getting successful status display the success msg // or else learn about integrating angular toaster 
    // read here: https://www.npmjs.com/package/ngx-toastr
    this.isSaved = true;
  }

}
