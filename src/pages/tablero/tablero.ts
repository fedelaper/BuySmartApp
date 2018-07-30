import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ListaModel } from '../../models/lista-model';

import { ListaPage } from '../lista/lista';
import { AddListModalPage } from '../add-list-modal/add-list-modal';

import { ListaServiceProvider } from '../../providers/lista-service/lista-service';


/**
 * Generated class for the TableroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablero',
  templateUrl: 'tablero.html',
})
export class TableroPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController, 
    public listaService: ListaServiceProvider) {
  }

  ionViewDidLoad() {}

  setListaStyle(lista: ListaModel){
    let styles = {
      'text-decoration': lista.listaCompleta ? 'line-through' : 'none' 
    }
    return styles;
  }

  toggleListaCompleta(lista: ListaModel){
    // this.listaService.toggleListaCompleta(lista);
  }

  deleteList(lista: ListaModel){
    // this.listaService.deleteList(lista);
  
  }

  showList(lista: ListaModel){
    //this.navCtrl.push(ListaPage);
    this.navCtrl.push(ListaPage, {lista});
  }

  addNewList(data){
    let newList = this.listaService.addList(data);
    this.listaService.saveInLocalStorage();
    this.showList(newList);
  }

  showAddList(list: ListaModel){
    let alert = this.modalCtrl.create(AddListModalPage);
    alert.present();
    alert.onDidDismiss((data) => {
          if(data){
            //si volvio ok del alert, creo el nuevo list con el nombre que viene.
            this.addNewList(data);
          };
    });
  }
  
/*
  showEditList(lista: ListaModel){
    let modal = this.modalCtrl.create(AddProductModalPage, {lista});
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.listaService.updateList(lista, data);
      }
    });
  }

  showAddList(){
    let modal = this.modalCtrl.create(AddProductModalPage);
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.plistaService.addList(data);
      }
    });
  }

  showAlertDelete(lista: ListaModel){
    let alert = this.modalCtrl.create(DeleteProductModalPage);
    alert.present();

    alert.onDidDismiss((data) => {
          if(data){
            //si volvio ok del alert, elimino
            this.listaService.deleteList(lista);
          };
    });
  }
*/
}
