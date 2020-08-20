import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessClassPageRoutingModule } from './business-class-routing.module';

import { BusinessClassPage } from './business-class.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    BusinessClassPageRoutingModule,
    TranslateModule
  ],
  declarations: [BusinessClassPage]
})
export class BusinessClassPageModule {}
