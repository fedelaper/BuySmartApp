import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProductoModel } from "../../models/product-model";
import { ListaModel } from "../../models/lista-model";

import { AddProductModalPage } from "../add-product-modal/add-product-modal";
import { DeleteProductModalPage } from "../delete-product-modal/delete-product-modal";

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

  private lista: ListaModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public productoService: ProductoServiceProvider) {

      this.lista = this.navParams.get('lista');

      if(this.lista.nombre){
        this.nombreLista = this.lista.nombre;
      }else{
        this.nombreLista = "null";
      }
      
      this.productoService.loadFromList(this.lista.id);
    }

  ionViewDidLoad() {}

  ionViewWillUnload(){
    this.productoService.saveToLocalStorage(this.lista.id);
  }

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
