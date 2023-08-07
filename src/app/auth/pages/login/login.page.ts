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
import { LocalNotificationsService } from 'src/app/shared/notifications/local-notifications.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = this._fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(this._v.emailPattern)],
    ],
    password: ['', [Validators.required]],
  });
  user!: IUser;
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly localNotificationsService: LocalNotificationsService,
    private readonly _v: ValidatorsService
  ) {}
  async ngOnInit(): Promise<void> {
    const resp = this._authService.getUser();
    const user = JSON.parse(resp.msg);
    this.form.patchValue(user);
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    localStorage.setItem('login', JSON.stringify(true));
    const resp = await this._authService.login();
    if (resp.ok) {
      this._router.navigateByUrl('dashboard', { replaceUrl: true });
      this.localNotificationsService.scheduleNotification(
        'Login',
        'Sesión',
        resp.msg
      );
    } else {
      this.localNotificationsService.scheduleNotification(
        'Login',
        'Sesión',
        resp.msg
      );
    }
  }

  register(): void {
    localStorage.clear();
    this._router.navigateByUrl('auth/register', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
