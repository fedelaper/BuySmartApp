import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteProductModalPage } from './delete-product-modal';

@NgModule({
  declarations: [
    DeleteProductModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteProductModalPage),
  ],
})
export class DeleteProductModalPageModule {}
