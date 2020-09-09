import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./driver/home/home.module').then( m => m.HomePageModule)
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
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
   },
   { path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./driver/trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'business-class',
    loadChildren: () => import('./pages/business-class/business-class.module').then( m => m.BusinessClassPageModule)
  },
  
  {
    path: 'term-usage',
    loadChildren: () => import('./pages/term-usage/term-usage.module').then( m => m.TermUsagePageModule)
  },
  {
    path: 'confidentiality',
    loadChildren: () => import('./pages/confidentiality/confidentiality.module').then( m => m.ConfidentialityPageModule)
  },
  {
    path: 'prestige',
    loadChildren: () => import('./pages/prestige/prestige.module').then( m => m.PrestigePageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./pages/premium/premium.module').then( m => m.PremiumPageModule)
  },
  {
    path: 'economique',
    loadChildren: () => import('./pages/economique/economique.module').then( m => m.EconomiquePageModule)
  },
  {
    path: 'car-filter',
    loadChildren: () => import('./pages/car-filter/car-filter.module').then( m => m.CarFilterPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
