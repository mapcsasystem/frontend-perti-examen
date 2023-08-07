import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { LocalNotificationsService } from 'src/app/shared/notifications/local-notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = this._fb.group({
    email: [''],
    password: [''],
  });
  user!: IUser;
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly localNotificationsService: LocalNotificationsService
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
