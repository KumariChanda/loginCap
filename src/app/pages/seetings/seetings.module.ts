import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeetingsPageRoutingModule } from './seetings-routing.module';

import { SeetingsPage } from './seetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeetingsPageRoutingModule
  ],
  declarations: [SeetingsPage]
})
export class SeetingsPageModule {}
