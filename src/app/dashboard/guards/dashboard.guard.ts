import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { IUser } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuardFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // const user = (await authService.getUser()) as IUser;
  // if (!user.email || !user.password) {
  //   localStorage.clear();
  //   router.navigateByUrl('auth/register', { replaceUrl: true });
  //   return false;
  // } else {
  //   router.navigateByUrl('dashboard', { replaceUrl: true });
  //   return true;
  // }
  return true;
};
