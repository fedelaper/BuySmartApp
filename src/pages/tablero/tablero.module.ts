import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableroPage } from './tablero';

@NgModule({
  declarations: [
    TableroPage,
  ],
  imports: [
    IonicPageModule.forChild(TableroPage),
  ],
})
export class TableroPageModule {}
