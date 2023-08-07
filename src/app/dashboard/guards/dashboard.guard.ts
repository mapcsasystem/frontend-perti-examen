import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { IUser } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuardFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const resp = authService.getUser();
  const user = JSON.parse(resp.msg) as IUser;
  const { password, email } = user;
  if (password && email) {
    return true;
  }
  localStorage.clear();
  router.navigateByUrl('/auth/login', { replaceUrl: true });
  return false;
};
