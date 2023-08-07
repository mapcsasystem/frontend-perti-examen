import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { AlertsService } from 'src/app/shared/alerts/alerts.service';

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
    private readonly _alertsService: AlertsService
  ) {}
  async ngOnInit(): Promise<void> {
    const resp = await this._authService.getUser();
    this.form.patchValue(resp);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this._router.navigateByUrl('dashboard', { replaceUrl: true });
  }

  register(): void {
    localStorage.clear();
    this._router.navigateByUrl('auth/register', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.form.get(field);
  }
}
