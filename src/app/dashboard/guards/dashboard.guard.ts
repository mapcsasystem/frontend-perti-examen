import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const dashboardGuardFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot
) => {
  const entrar = JSON.parse(localStorage.getItem('login') as string);
  return entrar;
};
