import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddListModalPage } from './add-list-modal';

@NgModule({
  declarations: [
    AddListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddListModalPage),
  ],
})
export class AddListModalPageModule {}
