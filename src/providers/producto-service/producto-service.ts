import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductoModel } from '../../models/product-model';

/*
  Generated class for the ProductoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoServiceProvider {

private lista: ProductoModel[];

  constructor(public http: HttpClient) {
  }

  public loadFromList(id: number){
    if(id < 2){
      this.lista = [
        //para pruebas
              new ProductoModel ("Producto 1", null, null, 1, null, false, null),
              new ProductoModel ("Producto 2", null, null, 2, null, false, null),
              new ProductoModel ("Producto 3", null, null, 3, null, false, null),
              new ProductoModel ("Producto 4 comprado", null, null, 1, null, true, null),
              new ProductoModel ("Producto 5 comprado", null, null, 2, null, true, null),
              new ProductoModel ("Producto 6 comprado", null, null, 3, null, true, null),
        //! para pruebas
            ];
    }else{
      this.lista = [
        //para pruebas
              new ProductoModel ("Producto 10", null, null, 1, null, false, null),
              new ProductoModel ("Producto 20", null, null, 2, null, false, null),
              new ProductoModel ("Producto 30", null, null, 3, null, false, null),
              new ProductoModel ("Producto 40 comprado", null, null, 1, null, true, null),
              new ProductoModel ("Producto 50 comprado", null, null, 2, null, true, null),
              new ProductoModel ("Producto 60 comprado", null, null, 3, null, true, null),
        //! para pruebas
            ];
    }
    
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
