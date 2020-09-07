import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurContactsPageRoutingModule } from './our-contacts-routing.module';

import { OurContactsPage } from './our-contacts.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurContactsPageRoutingModule,
    TranslateModule
  ],
  declarations: [OurContactsPage]
})
export class OurContactsPageModule {}
