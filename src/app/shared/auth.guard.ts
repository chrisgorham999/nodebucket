/*
======================================
; Title: auth.guard.ts
; Author: Chris Gorham
; Date Created: 16 August 2023
; Last Updated: 17 August 2023
; Description: This code supports the Auth Guard
; Sources Used: N/A
;=====================================
*/

// imports
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService)
  
  // if / else statement to let authorized users move on or navigate them back to the sign in page
  if (cookie.get('session_user')) {
    console.log('You are logged in and have a valid session cookie')
    return true
  } else {
    console.log('You must be logged in to access this page')
    const router = inject(Router)
    router.navigate(['/security/signin'], {queryParams: {returnUrl: state.url}})
    return false
  }
};
