import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CuentaPedido } from '../../../../beans/CuentaPedido';

@Component({
  selector: 'app-pedidos-list-item',
  templateUrl: './pedidos-list-item.component.html',
  styleUrls: ['./pedidos-list-item.component.css']
})
export class PedidosListItemComponent implements OnInit {
  @Output() cuentaClickEvent = new EventEmitter();
  @Input() cuenta:CuentaPedido;
  constructor() { }

  ngOnInit() {
  }
  cuentaClick(){
    this.cuentaClickEvent.emit(this.cuenta.id);
  }
}
