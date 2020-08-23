import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermUsagePageRoutingModule } from './term-usage-routing.module';

import { TermUsagePage } from './term-usage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermUsagePageRoutingModule
  ],
  declarations: [TermUsagePage]
})
export class TermUsagePageModule {}
