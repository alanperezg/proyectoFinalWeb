import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductoCuenta } from '../../../../../beans/ProductoCuenta';
import { GlobalService } from '../../../../../global.service';

@Component({
  selector: 'app-productos-list-item',
  templateUrl: './productos-list-item.component.html',
  styleUrls: ['./productos-list-item.component.css']
})
export class ProductosListItemComponent implements OnInit {
  @Input() producto: ProductoCuenta;
  constructor(private productosService: GlobalService) { }

  ngOnInit() {
  }
  eliminarProducto(){
    this.productosService.removeProductoCuenta(this.producto);
  }

}
