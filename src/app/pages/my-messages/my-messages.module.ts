import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMessagesPageRoutingModule } from './my-messages-routing.module';

import { MyMessagesPage } from './my-messages.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMessagesPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyMessagesPage]
})
export class MyMessagesPageModule {}
