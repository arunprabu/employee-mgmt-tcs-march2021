// Custom validator

// get pw, retype pw controls as args
// compare the values of the two 
// let other default validators also do the job
// if error -- set error with error obj
// else -- set error with null 

import { FormGroup } from "@angular/forms";

// Custom validator to check the entered password and the confirmPassword are same. 
export function PasswordsMustMatch( controlName: string, matchingControlName: string) { // password, retypePassword
  return (formGroup: FormGroup ) => {
    const pw = formGroup.controls[controlName]; // to get entered password
    const cpw = formGroup.controls[matchingControlName]; // to get entered confirmed password

    if(cpw.errors && !cpw.errors.mustMatch ){
      // if any other validator found anywhere else... let's return
      return;
    }

    //set Errors
    if(pw.value != cpw.value) {
      cpw.setErrors({mustMatch: true});
    }else{
      cpw.setErrors(null);
    }
  }
};


