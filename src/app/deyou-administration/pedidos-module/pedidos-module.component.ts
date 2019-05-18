import { Component, OnInit } from '@angular/core';
import { CuentaPedido } from '../../beans/CuentaPedido';
import { GlobalService } from '../../global.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pedidos-module',
  templateUrl: './pedidos-module.component.html',
  styleUrls: ['./pedidos-module.component.css']
})
export class PedidosModuleComponent implements OnInit {
  cuentaModalSetVisible: Subject<number> = new Subject<number>();
  cuentaModalSetInvisible: Subject<void> = new Subject<void>();
  constructor(private pedidosService: GlobalService) { }

  ngOnInit() {
  }
  openModalPedido(id: number){
    this.cuentaModalSetVisible.next(id);
  }

}
