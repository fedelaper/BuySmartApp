import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListaModel } from '../../models/lista-model';
/*
  Generated class for the ListaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaServiceProvider {

  private tablero: ListaModel[];

  constructor(public http: HttpClient) {
    this.getListas();
  }

  getListas(){
    this.tablero = [
      //para pruebas
            new ListaModel ("Lista 1",null,null,null,null),
            new ListaModel ("Lista 2",null,null,null,null),
            new ListaModel ("Lista 3",null,null,null,null),
            new ListaModel ("Lista 4",null,null,null,null),
            new ListaModel ("Lista 5",null,null,null,null),
            new ListaModel ("Lista 6",null,null,null,null),
      //! para pruebas
          ];
  }

  addList(list: ListaModel){
    let newList = new ListaModel (list.nombre, null, null, null, null);
    this.tablero = [...this.tablero, newList];
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
