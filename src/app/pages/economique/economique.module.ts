import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomiquePageRoutingModule } from './economique-routing.module';

import { EconomiquePage } from './economique.page';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    Ng2SearchPipeModule,
    EconomiquePageRoutingModule
  ],
  declarations: [EconomiquePage]
})
export class EconomiquePageModule {}
