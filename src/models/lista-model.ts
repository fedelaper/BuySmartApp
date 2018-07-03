import { ProductoModel } from "./product-model";

export class ListaModel {
    constructor(
        public nombre: string,
        public productos: ProductoModel[],
        public supermercado: string,
        public listaCompleta: boolean,
        public fechaLista: Date
    ) {}

    static clone(lista: ListaModel){
        return new ListaModel(lista.nombre, lista.productos, lista.supermercado, lista.listaCompleta, lista.fechaLista);
    }

}