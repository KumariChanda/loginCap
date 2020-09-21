import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendRidesPageRoutingModule } from './send-rides-routing.module';

import { SendRidesPage } from './send-rides.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    Ng2SearchPipeModule,
    SendRidesPageRoutingModule
  ],
  declarations: [SendRidesPage]
})
export class SendRidesPageModule {}
