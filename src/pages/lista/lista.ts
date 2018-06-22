import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProductoModel } from "../../models/product-model"
import { AddProductModalPage } from "../add-product-modal/add-product-modal"
import { ProductoServiceProvider } from '../../providers/producto-service/producto-service';
/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public productoService: ProductoServiceProvider) {}

  ionViewDidLoad() {}

  setProductStyle(product: ProductoModel){
    let styles = {
      'text-decoration': product.enElCarro ? 'line-through' : 'none' ,
      'font-weight': product.importancia > 1  ? '600' : 'none',
      'font-size': product.importancia == 3 ? '120%': '100%'
    }
    return styles;
  }
  
  toggleProductInCart(product: ProductoModel){
    this.productoService.toggleProductInCart(product);
  }

  deleteProduct(product: ProductoModel){
    this.productoService.deleteProduct(product);
  }

  showEditProduct(product: ProductoModel){
    let modal = this.modalCtrl.create(AddProductModalPage, {product});
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.productoService.updateProduct(product, data);
      }
    });
  }

  showAddProduct(){
    let modal = this.modalCtrl.create(AddProductModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.productoService.addProduct(data);
      }
    });
  }

}
