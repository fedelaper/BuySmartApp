import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';
import { ListaModel } from '../../models/lista-model';
import { ListaPage } from '../lista/lista';

/**
 * Generated class for the AddListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-list-modal',
  templateUrl: 'add-list-modal.html',
})
export class AddListModalPage {

  public model = new ListaModel(null,null,null,null,new Date());
  public title: string = "Nueva Lista";

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams, 
    public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListModalPage');
  }

  dissmiss(){
    this.viewCtrl.dismiss();
  }

  showList(lista: ListaModel){
    this.navCtrl.push(ListaPage);
    //this.navCtrl.push(ListaPage, {lista});
  }

  submit(){
    this.viewCtrl.dismiss(this.model);
    this.showList(this.model);
  }

}
