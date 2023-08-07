import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';

export const authGuardFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const resp = authService.getUser();
  const user = JSON.parse(resp.msg) as IUser;
  console.log(user);
  const { password, email } = user;
  if (!password) {
    localStorage.clear();
    router.navigateByUrl('/auth/login', { replaceUrl: true });
    return true;
  }
  if (!email) {
    localStorage.clear();
    router.navigateByUrl('/auth/login', { replaceUrl: true });
    return true;
  }
  return false;
};
