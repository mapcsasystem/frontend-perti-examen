import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  emailPattern: RegExp =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  samePasswords(form: AbstractControl): ValidationErrors | null {
    const pass1 = (form.get('password')?.value as string).trim();
    const pass2 = (form.get('password1')?.value as string).trim();
    if (pass1 === pass2) {
      form.get('password1')?.setErrors(null);
      return null;
    }

    form.get('password1')?.setErrors({ sameInvalidPassword: true });
    return null;
  }
}
