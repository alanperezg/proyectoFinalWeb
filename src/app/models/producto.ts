export class Producto{
    constructor(
        public id:number,
        public titulo:string,
        public descrip: string,
        public precio: number,
        public cantidad: number,
        public disponible: boolean
    ){
    }
}