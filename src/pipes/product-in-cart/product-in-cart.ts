import { Pipe, PipeTransform } from '@angular/core';
import { ProductoModel } from '../../models/product-model';

/**
 * Generated class for the ProductInCartPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'productInCartPipe'
})
export class ProductInCartPipe implements PipeTransform {
 
  transform(list: ProductoModel[]) {
    return list.filter(product => product.enElCarro);
  }
}
