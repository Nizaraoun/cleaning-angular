

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    // {
    //   path: 'login',
    //   component: 
    // },
    { path: '',
       redirectTo: '/home',
      pathMatch: 'full'
     },
    { path: 'home',
       component: HomeComponent
       },
  
    {
        path: 'navbar',
        component: NavbarComponent 
      },
      { path: '**', redirectTo: '/home' }  // Wildcard route for a 404 page

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
  