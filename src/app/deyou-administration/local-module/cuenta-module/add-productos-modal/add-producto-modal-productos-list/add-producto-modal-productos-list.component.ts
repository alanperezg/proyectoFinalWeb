import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductoOrden } from '../../../../../beans/ProductoOrden';
@Component({
  selector: 'app-add-producto-modal-productos-list',
  templateUrl: './add-producto-modal-productos-list.component.html',
  styleUrls: ['./add-producto-modal-productos-list.component.css']
})
export class AddProductoModalProductosListComponent implements OnInit {
  @Output() returnCategoriasClick = new EventEmitter();
  @Output() inDeClickEvent = new EventEmitter();
  @Input() productos: ProductoOrden[];
  constructor() { }

  ngOnInit() {
  }
  returnCategoriasBtnClick(){
    this.returnCategoriasClick.emit();
  }
  inDeClickEventClick(){
    this.inDeClickEvent.emit();
  }
}
