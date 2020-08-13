import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { IonicModule } from '@ionic/angular';

import { ReservationPagePageRoutingModule } from './reservation-page-routing.module';

import { ReservationPagePage } from './reservation-page.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ReservationPagePageRoutingModule,
    TranslateModule
  ],
  declarations: [ReservationPagePage]
})
export class ReservationPagePageModule {}
