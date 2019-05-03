import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'googlemaps',
    component: GooglemapsComponent
  },
  {
    path: 'booking/:id',
    component: BookingComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'payment/:movie_time',
    component: PaymentComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'details/:id',
    loadChildren: './details/details.module#DetailsPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
