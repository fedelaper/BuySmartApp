import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { ProductoModel } from '../../models/product-model';

/**
 * Generated class for the AddProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product-modal',
  templateUrl: 'add-product-modal.html',
})
export class AddProductModalPage {

  public model = new ProductoModel(null,null,null,null,null,false,new Date());
  public title: string = "Nuevo Producto";
  public buttonText: string = "Agregar Producto";

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(this.navParams.get('product')){
      this.model = ProductoModel.clone(this.navParams.get('product'));
      this.title = "Editar Producto";
      this.buttonText = "Modificar";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductModalPage');
  }

  dissmiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    this.viewCtrl.dismiss(this.model);
  }

}
