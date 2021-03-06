import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProductoModel } from "../../models/product-model"
import { AddProductModalPage } from "../add-product-modal/add-product-modal"
import { DeleteProductModalPage } from "../delete-product-modal/delete-product-modal"
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

  //Estas variables son para despues probar ordenamientos.
  //Duplico el ion-list en lista.html y les pongo hidden inversos manejados con 
  //un boton con un metodo toggle
  public orderByImportance: boolean = true;
  public orderByType: boolean = false;

  public nombreLista: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public productoService: ProductoServiceProvider) {

      //ver como cambiar esto dinamicamente segun la lista seleccionada
      this.nombreLista = "Lista 1";

    }

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

  showAlertDelete(product: ProductoModel){
    let alert = this.modalCtrl.create(DeleteProductModalPage);
    alert.present();

    alert.onDidDismiss((data) => {
          if(data){
            //si volvio ok del alert, elimino
            this.productoService.deleteProduct(product);
          };
    });
  }

}
