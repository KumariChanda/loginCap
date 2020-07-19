import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBookingsPageRoutingModule } from './my-bookings-routing.module';

import { MyBookingsPage } from './my-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBookingsPageRoutingModule
  ],
  declarations: [MyBookingsPage]
})
export class MyBookingsPageModule {}
