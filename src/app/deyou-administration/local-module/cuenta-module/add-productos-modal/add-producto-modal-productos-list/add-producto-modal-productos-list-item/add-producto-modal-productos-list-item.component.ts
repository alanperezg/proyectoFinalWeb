import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductoOrden } from '../../../../../../beans/ProductoOrden';

@Component({
  selector: 'app-add-producto-modal-productos-list-item',
  templateUrl: './add-producto-modal-productos-list-item.component.html',
  styleUrls: ['./add-producto-modal-productos-list-item.component.css']
})
export class AddProductoModalProductosListItemComponent implements OnInit {
  @Input() producto: ProductoOrden;
  @Output() inDeClickEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  incrementProducto(){
    this.producto.cantidad++;
    this.inDeClickEvent.emit();
  }
  decreaseProducto(){
    if(this.producto.cantidad>0){
      this.producto.cantidad--;
      this.inDeClickEvent.emit();
    }
  }
}
