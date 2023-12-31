/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date Created: 15 August 2023
; Last Updated: 30 August 2023
; Description: This code supports routing in the app
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// imports statements
import { AboutComponent } from './about/about.component';
import { authGuard } from './shared/auth.guard';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';




// routes array with a path, component, and title for each route in the application (e.g. home, about, contact, etc.)
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Nodebucket: Home' // title for the home page
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Nodebucket: Home'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Nodebucket: Contact Us'
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Nodebucket: 404'
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Nodebucket: About'
      },
      {
        path: 'task-management',
        loadChildren: () => import('./task-management/task-management.module').then(m => m.TaskManagementModule),
        canActivate: [authGuard]
      }
    ]
  },
  {
    // path for the security module (e.g. login, register, forgot password, etc.)
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  // imports the RouterModule and defines the routes array and other options (e.g. useHash, enableTracing, scrollPositionRestoration)
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
