import { ProductoOrden } from './ProductoOrden';

export class CategoriaOrden {
    constructor(
      public id: number,
      public nombre: string,
      public productos: ProductoOrden[]) { }
  }
