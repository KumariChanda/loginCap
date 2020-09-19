import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarFilterPageRoutingModule } from './car-filter-routing.module';

import { CarFilterPage } from './car-filter.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarFilterPageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule
  ],
  declarations: [CarFilterPage]
})
export class CarFilterPageModule {}
