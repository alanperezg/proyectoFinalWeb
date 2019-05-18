export class Venta {
    constructor(
      public id: number,
      public fecha: Date,
      public tipoVenta: number,
      public cliente: string,
      public mesero: string,
      public total: number) { }
  }
