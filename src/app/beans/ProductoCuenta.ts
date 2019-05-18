export class ProductoCuenta {
    constructor(
      public id: string,
      public ordenId: string,
      public productoId: string,
      public nombre: string,
      public cantidad: number,
      public precio: number) { }
  }