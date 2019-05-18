import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaOrden } from '../../../../beans/CategoriaOrden';
import { ProductoOrden } from '../../../../beans/ProductoOrden';
import { GlobalService } from '../../../../global.service';

@Component({
  selector: 'app-add-productos-modal',
  templateUrl: './add-productos-modal.component.html',
  styleUrls: ['./add-productos-modal.component.css']
})
export class AddProductosModalComponent implements OnInit {
  categorias : CategoriaOrden[];
  productos : ProductoOrden[];
  visibility: boolean;
  showCategorias: boolean;
  showProductos: boolean;
  cuentaProductos: number;
  @Input() setVisibility: Observable<boolean>;
  @Input() cuentaId: number;
  constructor(private productosService:GlobalService) {}
  ngOnInit() {
    this.categorias = this.productosService.getProductosWithCategoria();
    this.countProductos();
    this.setVisibility.subscribe((status)=>{
      if(status){
        this.showModal();
      }else{
        this.hideModal();
      }
      this.setModalState(0);
    });
  }
  showModal(){
    this.categorias = this.productosService.getProductosWithCategoria();
    console.log(this.productosService.getProductosWithCategoria());
    this.countProductos();
    this.visibility = true;
  }
  hideModal(){
    this.visibility = false;
  }
  setModalState(state:number){
    if(state == 0){
      this.showCategorias = true;
      this.showProductos = false;
    }else{
      this.showCategorias = false;
      this.showProductos = true;
    }
  }
  categoriaClick(id:number){
    let productosActual: ProductoOrden[];
    this.categorias.forEach(function(e){
      
      if(e.id == id){
        productosActual=e.productos;
      }
    });
    this.productos = productosActual;
    this.setModalState(1);
  }
  returnToCategoriasClick(){
    this.setModalState(0);
  }
  countProductos(){
    let cuenta: number = 0;
    this.categorias.forEach(function(e){
      e.productos.forEach(e2 => {
        cuenta+=e2.cantidad;
      });
    })
    this.cuentaProductos = cuenta;
  }
  inDeClickEventClick(){
    this.countProductos();
  }
  addProductosCuenta(){
    let productos: ProductoOrden[] = [];
    this.categorias.forEach((e1, i1) => {
      e1.productos.forEach((e2, i2) => {
        if(e2.cantidad > 0){
          productos.push(new ProductoOrden(e2.id,e2.nombre, e2.precio, e2.cantidad));
        }
      });
    });
    if(productos.length > 0){
      console.log(this.cuentaId);
      this.productosService.addProductosToCuenta(this.cuentaId, productos);
      this.hideModal();
    }
  }
}
