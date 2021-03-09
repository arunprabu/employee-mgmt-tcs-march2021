import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordsMustMatch } from './pw-must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  // Reactive Form using Form Builder
  signupForm: any;

  constructor(private fb: FormBuilder) {  // Dependency injection
    // Step 1:
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    }, {
      validator: PasswordsMustMatch('password', 'retypePassword') // PasswordsMustMatch is a custom Validator I created
    });
  }

  ngOnInit(): void {
  }

  signupHandler(){
    console.log(this.signupForm);
  }

}
