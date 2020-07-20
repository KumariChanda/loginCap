import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurContactsPageRoutingModule } from './our-contacts-routing.module';

import { OurContactsPage } from './our-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurContactsPageRoutingModule
  ],
  declarations: [OurContactsPage]
})
export class OurContactsPageModule {}
