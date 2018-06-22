import { Pipe, PipeTransform } from '@angular/core';
import { ProductoModel } from '../../models/product-model';

/**
 * Generated class for the ImportanceProductsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'importanceProductsPipe',
  pure: false,
})
export class ImportanceProductsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: ProductoModel[]) {
    //return list.filter( product => product.nombre.length > 0 ).sort((a,b) => (b.importancia > a.importancia) ? 1 : -1);
    return list.filter( product => product.nombre.length > 0 ).sort((a,b) => ((b.enElCarro && !a.enElCarro) ? -1 : 
        ((a.enElCarro && ! b.enElCarro) ? 1 : (b.importancia > a.importancia) ? 1 : -1)));
  }
}
