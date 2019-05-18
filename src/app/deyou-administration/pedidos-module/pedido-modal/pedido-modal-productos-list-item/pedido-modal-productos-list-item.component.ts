import { Component, OnInit, Input } from '@angular/core';
import { ProductoOrden } from '../../../../beans/ProductoOrden';


@Component({
  selector: 'app-pedido-modal-productos-list-item',
  templateUrl: './pedido-modal-productos-list-item.component.html',
  styleUrls: ['./pedido-modal-productos-list-item.component.css']
})
export class PedidoModalProductosListItemComponent implements OnInit {
  @Input() orden: ProductoOrden;
  constructor() { }

  ngOnInit() {
  }

}
