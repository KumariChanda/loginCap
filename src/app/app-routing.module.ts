import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./driver/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./pages/my-bookings/my-bookings.module').then( m => m.MyBookingsPageModule)
  },
  {
    path: 'our-contacts',
    loadChildren: () => import('./pages/our-contacts/our-contacts.module').then( m => m.OurContactsPageModule)
  },
  {
    path: 'seetings',
    loadChildren: () => import('./pages/seetings/seetings.module').then( m => m.SeetingsPageModule)
  },
  {
    path: 'send-feedbacks',
    loadChildren: () => import('./pages/send-feedbacks/send-feedbacks.module').then( m => m.SendFeedbacksPageModule)
  },
  {
    path: 'car-fleet',
    loadChildren: () => import('./pages/car-fleet/car-fleet.module').then( m => m.CarFleetPageModule)
  },
  {
    path: 'my-messages',
    loadChildren: () => import('./pages/my-messages/my-messages.module').then( m => m.MyMessagesPageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./pages/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'reservation-page',
   loadChildren: () => import('./pages/reservation-page/reservation-page.module').then( m => m.ReservationPagePageModule)
  },
  
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
