import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyClassPageRoutingModule } from './family-class-routing.module';

import { FamilyClassPage } from './family-class.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    FamilyClassPageRoutingModule,
    TranslateModule

  ],
  declarations: [FamilyClassPage]
})
export class FamilyClassPageModule {}
