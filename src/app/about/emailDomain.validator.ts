import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailDomainValidator(emailInput: any): ValidatorFn {
  return (control: AbstractControl): { [ key: string ]: any } | null => {
    
    const isForbiddenDomain = /yahoo/.test(control.value);
    
    if(isForbiddenDomain){
      return { 'forbiddenDomainName': { value: control.value } }
    }else{
      return null;
    }
  }
}