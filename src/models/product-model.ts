export class ProductoModel {
    constructor(
        public nombre: string,
        public tipo: string,
        public marca: string,
        //public cantidad: string,
        public importancia: number = 0,
        public precio: number,
        public enElCarro: boolean = false,
        public fechaComprado: Date
    ) {}

    static clone(product: ProductoModel){
        return new ProductoModel(product.nombre, product.tipo, product.marca, product.importancia, 
            product.precio, product.enElCarro, product.fechaComprado);
    }

}