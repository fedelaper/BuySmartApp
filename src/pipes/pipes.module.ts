import { NgModule } from '@angular/core';
import { ImportanceProductsPipe } from './importance-products/importance-products';
import { TypeProductsPipe } from './type-products/type-products';
import { ProductInCartPipe } from './product-in-cart/product-in-cart';
@NgModule({
	declarations: [ImportanceProductsPipe,
    TypeProductsPipe,
    ProductInCartPipe],
	imports: [],
	exports: [ImportanceProductsPipe,
    TypeProductsPipe,
    ProductInCartPipe]
})
export class PipesModule {}
