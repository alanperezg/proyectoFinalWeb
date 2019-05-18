export class CuentaPedido {
    constructor(
      public id: number,
      public cliente: string,
      public colonia: string,
      public direccion: string,
      public cp: string,
      public telefono: string,
      public estadoPedido: number) { }
  }
