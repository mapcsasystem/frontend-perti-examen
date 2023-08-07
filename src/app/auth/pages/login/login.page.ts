import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form: FormGroup = this._fb.group({
    email: [''],
    password: [''],
  });
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {}

  submit(): void {
    console.log(this.form);
    this._router.navigateByUrl('dashboard', { replaceUrl: true });
  }

  register(): void {
    this._router.navigateByUrl('auth/register', { replaceUrl: true });
  }
}
