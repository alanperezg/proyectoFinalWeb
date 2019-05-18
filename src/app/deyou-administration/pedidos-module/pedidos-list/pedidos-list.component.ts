import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CuentaPedido } from '../../../beans/CuentaPedido';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  @Input() listTitle: string;
  @Output() cuentaClickEvent = new EventEmitter();
  cuentas: CuentaPedido[];
  constructor(private cuentasService: GlobalService) { }
  ngOnInit() {
    this.cuentas = this.cuentasService.getCuentaPedidos();
    this.cuentasService.cambioCuentaPedidos.subscribe(res => {
      this.cuentas = res;
    })
  }
  cuentaClick(id:number){
    this.cuentaClickEvent.emit(id);
  }

}
