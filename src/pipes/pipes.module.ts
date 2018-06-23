import { NgModule } from '@angular/core';
import { ImportanceProductsPipe } from './importance-products/importance-products';
import { TypeProductsPipe } from './type-products/type-products';
@NgModule({
	declarations: [ImportanceProductsPipe,
    TypeProductsPipe],
	imports: [],
	exports: [ImportanceProductsPipe,
    TypeProductsPipe]
})
export class PipesModule {}
