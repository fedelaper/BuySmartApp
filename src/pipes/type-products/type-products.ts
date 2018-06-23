import { Pipe, PipeTransform } from '@angular/core';
import { ProductoModel } from '../../models/product-model';


/**
 * Generated class for the TypeProductsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'typeProductsPipe',
})
export class TypeProductsPipe implements PipeTransform {
  /**
   * Orders Products by their type and the fact that they are in the kart or not.
   */
  transform(list: ProductoModel[]) {
    //return list.filter( product => product.nombre.length > 0 ).sort((a,b) => (b.importancia > a.importancia) ? 1 : -1);
    return list.filter( product => product.nombre.length > 0 ).sort((a,b) => ((b.enElCarro && !a.enElCarro) ? -1 : 
        ((a.enElCarro && ! b.enElCarro) ? 1 : (b.tipo > a.tipo) ? 1 : -1)));
  }
}
