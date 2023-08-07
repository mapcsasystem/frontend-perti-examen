import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup = this._fb.group(
    {
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.pattern(this._v.emailPattern)],
      ],
      password: ['', [Validators.required]],
      password1: ['', [Validators.required]],
    },
    { validators: [this._v.samePasswords] }
  );
  eye = true;
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _v: ValidatorsService
  ) {}

  ngOnInit(): void {
    this._authService.getRandomUser().subscribe((userRandom) => {
      console.log(userRandom);

      const user: IUser = {
        fullName: `${userRandom.name.first} ${userRandom.name.last}`,
        userName: `${userRandom.login.username}`,
        email: `${userRandom.email}`,
        password: `${userRandom.login.password}`,
      };

      this.form.patchValue(user);
      this.form.markAllAsTouched();
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.goToLogin();
  }

  clickEye(): void {
    this.eye = !this.eye;
  }

  goToLogin(): void {
    this._router.navigateByUrl('auth/login', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
