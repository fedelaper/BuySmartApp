import { Pipe, PipeTransform } from '@angular/core';
import { ProductoModel } from '../../models/product-model';

/**
 * Generated class for the ImportanceProductsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'importanceProductsPipe'
})
export class ImportanceProductsPipe implements PipeTransform {
  /**
   * Orders Products by their importance and the fact that they are in the kart or not.
   */
  transform(list: ProductoModel[]) {
    // Ordenamiento por relacion importancia/enelcarro
    //return list.filter( product => product.nombre.length > 0 ).sort((a,b) => ((b.enElCarro && !a.enElCarro) ? -1 : 
    //   ((a.enElCarro && ! b.enElCarro) ? 1 : (b.importancia > a.importancia) ? 1 : -1)));
    // Ordenamiento por importancia
    return list.filter( product => !product.enElCarro).sort((a,b) => (b.importancia > a.importancia) ? 1 : -1);
  }
}
