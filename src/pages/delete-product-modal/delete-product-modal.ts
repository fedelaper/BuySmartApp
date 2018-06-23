import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProductoModel } from '../../models/product-model';

/**
 * Generated class for the DeleteProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-product-modal',
  templateUrl: 'delete-product-modal.html',
})
export class DeleteProductModalPage {

  public model = new ProductoModel(null,null,null,null,null,false,new Date());
  public title: string = "Confirmación";
  public text: string = "Desea eliminar el producto?";

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteProductModalPage');
  }

  dissmiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    this.viewCtrl.dismiss(this.model);
  }

}
