export class Cuenta {
    constructor(
      public id: string,
      public mesaId: string,
      public mesa: string,
      public meseroId: string,
      public mesero: string,
      public clienteId: string,
      public cliente: string,
      public colonia: string,
      public direccion: string, 
      public cp: string,
      public telefono: string,
      public fechaRegistro: string,
      tipo: number,
      estado: number,
      total: number
      ) { }
  }
