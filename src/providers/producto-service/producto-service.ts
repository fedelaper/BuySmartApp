import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage'

import { ProductoModel } from '../../models/product-model';

/*
  Generated class for the ProductoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoServiceProvider {

private lista: ProductoModel[] = [];

  constructor(public http: HttpClient, public localStorage: Storage) {
  }

  public loadFromList(id: number){
    this.getFromLocalStorage(id);
  }

  public getFromLocalStorage(id: number){
    this.localStorage.ready().then(()=>{
      this.localStorage.get(`lista/${id}`).then(
        data => {
          if(!data){
            this.lista = [];
            return;
          }

          let storedList: ProductoModel[] = [];
          for(let product of data){
            storedList.push(new ProductoModel (product.nombre, product.tipo, product.marca, product.importancia,
                product.precio, product.enElCarro, product.fechaComprado));
          }
          this.lista = storedList;
        }
      )
    })
  }

  public saveToLocalStorage(id: number){
    this.localStorage.ready().then(()=>{
      this.localStorage.set(`lista/${id}`, this.lista);
    })
  }

  toggleProductInCart(product: ProductoModel){
    let enElCarro = ! product.enElCarro;
    const index = this.lista.indexOf(product);

    let updatedProd = new ProductoModel(product.nombre, product.tipo, product.marca, product.importancia, 
        product.precio, enElCarro, product.fechaComprado);
        
    this.lista = [...this.lista.slice(0, index), updatedProd, ...this.lista.slice(index+1)];
  }

  deleteProduct(product: ProductoModel){
    const index = this.lista.indexOf(product);
    this.lista = [...this.lista.slice(0, index), ...this.lista.slice(index+1)]
  }

  updateProduct(original: ProductoModel, modified: ProductoModel){
    const index = this.lista.indexOf(original);
    this.lista = [...this.lista.slice(0, index), modified, ...this.lista.slice(index+1)];
  }

  addProduct(product: ProductoModel){
    //Lo que hago aca ese separar cada uno de los elementos de lista y agregarle uno mas. 
    //Todo eso despues lo asigno a la misma lista
    this.lista = [...this.lista, product];
  }

}
