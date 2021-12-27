import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";
import { emailDomainValidator } from "./emailDomain.validator";

@Directive({
  selector: '[forbiddenDomain][ngModel]',  // use this selector in the input element
  providers: [
    { provide: NG_VALIDATORS, useExisting: UserMatchValidator, multi: true }
  ]
})

export class UserMatchValidator implements Validator{
  validate(c: FormControl) {
    return emailDomainValidator('yahoo')(c);
  }
}