import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportClientPageRoutingModule } from './report-client-routing.module';

import { ReportClientPage } from './report-client.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReportClientPageRoutingModule
  ],
  declarations: [ReportClientPage]
})
export class ReportClientPageModule {}
