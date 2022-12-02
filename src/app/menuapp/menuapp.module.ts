import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuappPageRoutingModule } from './menuapp-routing.module';

import { MenuappPage } from './menuapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuappPageRoutingModule
  ],
  declarations: [MenuappPage]
})
export class MenuappPageModule {}
