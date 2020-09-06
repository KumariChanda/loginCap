import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermUsagePageRoutingModule } from './term-usage-routing.module';

import { TermUsagePage } from './term-usage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermUsagePageRoutingModule,
    TranslateModule
  ],
  declarations: [TermUsagePage]
})
export class TermUsagePageModule {}
