import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestigePageRoutingModule } from './prestige-routing.module';

import { PrestigePage } from './prestige.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    TranslateModule,
    PrestigePageRoutingModule
  ],
  declarations: [PrestigePage]
})
export class PrestigePageModule {}
