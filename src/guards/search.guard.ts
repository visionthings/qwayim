import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const searchGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('search')) {
      router.navigateByUrl('/home');
      return false;
    }
  }
  return true;
};
