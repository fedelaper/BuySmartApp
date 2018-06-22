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
    this.getProducts();
  }

  getProducts(){
    this.lista = [
      //para pruebas
            new ProductoModel ("importancia 1", null, null, 1, null, false, null),
            new ProductoModel ("importancia 2", null, null, 2, null, false, null),
            new ProductoModel ("importancia 3", null, null, 3, null, false, null),
            new ProductoModel ("importancia 1 carro", null, null, 1, null, true, null),
            new ProductoModel ("importancia 2 carro", null, null, 2, null, true, null),
            new ProductoModel ("importancia 3 carro", null, null, 3, null, true, null),
      //! para pruebas
          ];
  }

  toggleProductInCart(product: ProductoModel){
    product.enElCarro = ! product.enElCarro;
  }

  deleteProduct(product: ProductoModel){
    const index = this.lista.indexOf(product);
    this.lista.splice(index, 1);
  }

  updateProduct(original: ProductoModel, modified: ProductoModel){
    const index = this.lista.indexOf(original);
    this.lista.splice(index, 1, modified);
  }

  addProduct(product: ProductoModel){
    this.lista.push(product);
  }
}
