import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumPageRoutingModule } from './premium-routing.module';

import { PremiumPage } from './premium.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    Ng2SearchPipeModule,
    PremiumPageRoutingModule
  ],
  declarations: [PremiumPage]
})
export class PremiumPageModule {}
