import { Injectable } from '@angular/core';
import { Acceso } from './models/acceso';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';

import { Cuenta } from './beans/Cuenta';
import { ProductoCuenta } from './beans/ProductoCuenta';
import { CategoriaOrden } from './beans/CategoriaOrden';
import { ProductoOrden } from './beans/ProductoOrden';
import { CuentaPedido } from './beans/CuentaPedido';
import { Mesa } from './beans/Mesa';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { Mesero } from './beans/Mesero';

@Injectable({
    providedIn: 'root'
  })
  export class GlobalService{
    constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router) { }
    apiUrl = 'http://puntoventaalan.herokuapp.com/api/';
    private lastId = 1;
    cambioStatusLog = new Subject<boolean>();
    private statusLog: boolean = false;
    private usuarios: Acceso[] = [
        new Acceso(this.lastId++, 'admin', 'admin', 1),
        new Acceso(this.lastId++, 'guest', '123', 2)
    ];

    private notificarStatusLog(){
      this.cambioStatusLog.next(this.getStatusLog());
    }

    getStatusLog(): boolean{
      return this.statusLog;
    }

    getAccesos(): Acceso[]{
      return this.usuarios.slice();
    }
    validarAcceso(usuario: string, contrasenia: string): Acceso{
      let User : Acceso;
      const Index = this.usuarios.findIndex(user => user.usuario == usuario && user.contrasena == contrasenia);

      if(Index >= 0){
        User = Object.assign({}, this.usuarios[Index]);
        this.statusLog = true;
        this.notificarStatusLog();
        return User;
      }
      this.statusLog = false;
      this.notificarStatusLog();
      return User;
    }



    //SUBJECTS
    cuentasSubject = new Subject<Cuenta[]>();
    productosCuentaSubject = new Subject<ProductoCuenta[]>();

    //METODOS
    userAuth(next){
      let token = this.cookieService.get('token');
      if(token != undefined){
        if(token != ""){
          const  headers = new  HttpHeaders().set('X-Token',token);
          next(headers);
        }else{
          this.router.navigate(['/admin/login']);
        }
      }else{
        this.router.navigate(['/admin/login']);
      }
    }
    getMesasDisponibles(){
      let subject = new Subject<Mesa[]>();
      this.userAuth((headers) => {
        this.httpClient.get(this.apiUrl + 'mesas?disponible=true', {headers}).subscribe(res => {
          const mesas = res as Mesa[];
          subject.next(mesas);
        });
      });
      return subject;
    }
    getMeserosDisponibles(){
      let subject = new Subject<Mesero[]>();
      this.userAuth((headers) => {
        this.httpClient.get(this.apiUrl + 'meseros?disponible=true', {headers}).subscribe(res => {
          const meseros = res as Mesero[];
          subject.next(meseros);
        });
      });
      return subject;
    }
    abrirCuenta(cuenta: Cuenta){
      this.userAuth((headers) => {
        let body = {mesaId: cuenta.mesaId, meseroId: cuenta.meseroId, clienteId: cuenta.clienteId, tipo:0, estado:1, total:0}
        this.httpClient.post(this.apiUrl + 'abrirorden', body, {headers}).subscribe(res => {
          this.getCuentas().subscribe(res => {
            let cuentas = res as Cuenta[];
            this.cuentasSubject.next(cuentas);
          });
        });
      });
    }
    getCuenta(id: String) {
      let subject = new Subject<Cuenta>();
      this.userAuth((headers) => {
        this.httpClient.get(this.apiUrl + 'ordenes/'+id, {headers}).subscribe(res => {
          let cuenta = res as Cuenta;
          subject.next(cuenta);
        });
      });
      return subject;
    }
    cerrarCuenta(id: String){
      this.userAuth((headers) => {
        let body = {};
        this.httpClient.patch(this.apiUrl + 'cerrarorden/' + id, body, {headers}).subscribe(res => {
          this.getCuentas().subscribe(res => {
            let cuentas = res as Cuenta[];
            this.cuentasSubject.next(cuentas);
          });
        });
      });
    }
    getProductosCuenta(id: String): Subject<ProductoCuenta[]>{
      let subject = new Subject<ProductoCuenta[]>();
      this.userAuth((headers) => {
        this.httpClient.get(this.apiUrl + 'ordenes/'+id+"/productos", {headers}).subscribe(res => {
          const productos = res as ProductoCuenta[];
          subject.next(productos);
        });
      });
      return subject;
    }




    getCuentas(){
      let subject = new Subject<Cuenta[]>();
      this.userAuth((headers) => {
        this.httpClient.get(this.apiUrl + 'ordenes?tipo=0&abierta=true', {headers}).subscribe(res => {
          const cuentas = res as Cuenta[];
          subject.next(cuentas);
        });
      });
      return subject;
    }
    removeProductoCuenta(producto: ProductoCuenta){
      /*if(this.productosCuentas[producto.ordenId].length > 0){
        this.productosCuentas[producto.ordenId].forEach((element, index) => {
          if(element.productoOrdenId == producto.productoOrdenId){
            this.productosCuentas[producto.ordenId].splice(index,1);
          }
        })
      }
      this.cambioProductosCuenta.next(this.getProductosCuenta(producto.ordenId));*/
    }
    categorias = [new CategoriaOrden(1, "Refrescos", [new ProductoOrden(1, "Cocacola", 20, 0), new ProductoOrden(2, "Pepsi", 20, 0),new ProductoOrden(3, "Fanta", 20, 0)]), 
    new CategoriaOrden(2, "Sushi", [new ProductoOrden(4, "California Roll", 90, 0), new ProductoOrden(5, "Banana Roll", 120, 0), new ProductoOrden(6, "Shrimp Roll", 120, 0)]),
    new CategoriaOrden(3, "Rollos", [new ProductoOrden(7, "Primavera Roll", 30, 0)])];
    getProductosWithCategoria():CategoriaOrden[]{
      let categoriasProductos:CategoriaOrden[] = [];
      this.categorias.forEach((e,i) => {
        let productos: ProductoOrden[] = [];
        e.productos.forEach((e2, i2) => {
          productos.push(new ProductoOrden(e2.id, e2.nombre, e2.precio, e2.cantidad));
        });
        categoriasProductos.push(new CategoriaOrden(e.id, e.nombre, productos));
      });
      return categoriasProductos;
    }
    productoOrdenId = 3;
    addProductosToCuenta(cuentaId:number, productos:ProductoOrden[]){
      /*productos.forEach((e,i) => {
        this.productosCuentas[cuentaId].push(new ProductoCuenta(e.id, cuentaId, this.productoOrdenId++, e.nombre, e.precio, e.cantidad));
      });
      this.cambioProductosCuenta.next(this.getProductosCuenta(cuentaId));*/
    }
    cuentaPedidos: CuentaPedido[] = [new CuentaPedido(0, "Alan Pérez", "Las aralias", "Cenzontle #118", "48328", "322-231-7467", 0), new CuentaPedido(1, "Eric Pérez", "Parques del bosque", "Av. Padre Xavier Schafler", "48232", "322-127-8800", 1)]
    getCuentaPedidos(){
      return this.cuentaPedidos.slice();
    }
    getCuentaPedido(id: number){
      let cuenta: CuentaPedido;
      this.cuentaPedidos.forEach((element, index) => {
        if(element.id == id){
          cuenta = new CuentaPedido(element.id, element.cliente, element.colonia, element.direccion, element.cp, element.telefono, element.estadoPedido);
        }
      });
      return cuenta;
    }
    getProductosCuentaPedido(cuentaId: number){
      let getCuentaSubject = new Subject<ProductoCuenta[]>();
      this.httpClient.get('http://api.myjson.com/bins/9dayq').subscribe(res => {
        let productosCuenta = res as ProductoCuenta[];
        getCuentaSubject.next(productosCuenta);
      });
      return getCuentaSubject;
    }
    cambioCuentaPedidos = new Subject<CuentaPedido[]>();
    setEstadoPedidoToCuentaPedido(id:number, estado:number){
      this.cuentaPedidos.forEach((element, index) => {
        if(element.id == id){
          this.cuentaPedidos[index].estadoPedido = estado;
          this.cambioCuentaPedidos.next(this.getCuentaPedidos());
        }
      });
    }
}