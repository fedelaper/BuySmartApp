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
}