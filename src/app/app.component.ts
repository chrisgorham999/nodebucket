/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date Created: 15 August 2023
; Last Updated: 15 August 2023
; Description: This code supports the App Component
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- This router-outlet displays the content of the BaseLayout or AuthLayout components -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
