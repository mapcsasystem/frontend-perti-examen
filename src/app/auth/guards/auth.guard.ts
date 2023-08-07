import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';

export const authGuardFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // const user = (await authService.getUser()) as IUser;
  // if (!user.email || !user.password) {
  //   localStorage.clear();
  //   router.navigateByUrl('auth/register', { replaceUrl: true });
  //   return true;
  // } else {
  //   router.navigateByUrl('dashboard', { replaceUrl: true });
  //   return false;
  // }

  return true;
};
