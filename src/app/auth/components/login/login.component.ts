import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  myForm;

  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group({
      email: ['', [ Validators.required , Validators.email] ],
      password: ['', Validators.required ],
      confirmPassword: ['', Validators.required ],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword') // MustMatch is a custom Validator I created
    });
  }

  ngOnInit(): void {
  }

}
