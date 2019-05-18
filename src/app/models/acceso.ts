export class Acceso{
    constructor(
        public id: number,
        public usuario: string,
        public contrasena: string,
        public tipoUsuario: number
    ){}
}