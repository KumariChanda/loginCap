import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfidentialityPageRoutingModule } from './confidentiality-routing.module';

import { ConfidentialityPage } from './confidentiality.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfidentialityPageRoutingModule,
    TranslateModule
  ],
  declarations: [ConfidentialityPage]
})
export class ConfidentialityPageModule {}
