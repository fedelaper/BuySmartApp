import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage'; 

import { ListaModel } from '../../models/lista-model';
/*
  Generated class for the ListaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaServiceProvider {

  private tablero: ListaModel[];

  constructor(public http: HttpClient, public localStorage: Storage) {
    this.getListas();
  }

  private getListas(){
    // this.tablero = [
    //   //para pruebas
    //         new ListaModel (0,"Lista 1",null,null,null,null),
    //         new ListaModel (1,"Lista 2",null,null,null,null),
    //         new ListaModel (2,"Lista 3",null,null,null,null),
    //         new ListaModel (3,"Lista 4",null,null,null,null),
    //         new ListaModel (4,"Lista 5",null,null,null,null),
    //         new ListaModel (5,"Lista 6",null,null,null,null),
    //   //! para pruebas
    //       ];
    this.getFromLocalStorage();
  }
 
  public addList(list: ListaModel){
    let newList = new ListaModel (null, list.nombre, null, null, null, null);
    this.tablero = [...this.tablero, newList];
    return list;
  }

  public getFromLocalStorage() {
    this.localStorage.ready().then(() => {
      this.localStorage.get('listas').then(
        data => {
          let storedLists: ListaModel[] = [];
          if(data){
            for(let lista of data){
              storedLists.push(new ListaModel (null, lista.nombre, null, null, null, null));
            }
          }
          this.tablero = storedLists;
        }
      )
    })
  }

  public saveInLocalStorage(){
    this.localStorage.ready().then(() => {
        this.localStorage.set('lists', this.tablero);
    })
  }
  // createListsForTest(qtty: number){
  //   let i = 0;
  //   for( i; i < qtty; i++){
  //     new ListaModel ("Lista "+i,null,null,null,null);
  //   }
  // }

  // toggleListaCompleta(lista: ListaModel){
  //   lista.listaCompleta = ! lista.listaCompleta;
  // }

  // deleteList(lista: ListaModel){
  //   const index = this.tablero.indexOf(lista);
  //   this.tablero.splice(index, 1);
  // }

  // updateList(original: ListaModel, modified: ListaModel){
  //   const index = this.tablero.indexOf(original);
  //   this.tablero.splice(index, 1, modified);
  // }

  // addProduct(lista: ListaModel){
  //   this.tablero.push(lista);
  // }

}
