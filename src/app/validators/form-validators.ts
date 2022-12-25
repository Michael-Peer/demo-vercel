import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordStrenghValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    if (password.length < 8) {
      return {passwordStrengh:true};
    }
    return null;
  }
}

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.value;
    if (name !== 'Samantha') {
      return {correctName:true};
    }
    return null;
  }
}
