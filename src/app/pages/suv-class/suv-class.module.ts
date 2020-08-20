import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuvClassPageRoutingModule } from './suv-class-routing.module';

import { SuvClassPage } from './suv-class.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuvClassPageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule

  ],
  declarations: [SuvClassPage]
})
export class SuvClassPageModule {}
