import { Component, OnInit, Input } from '@angular/core';
import { CuentaPedido } from '../../../beans/CuentaPedido';
import { GlobalService } from '../../../global.service';
import { ProductoCuenta } from '../../../beans/ProductoCuenta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido-modal',
  templateUrl: './pedido-modal.component.html',
  styleUrls: ['./pedido-modal.component.css']
})
export class PedidoModalComponent implements OnInit {
  @Input() setVisible: Observable<number>; 
  @Input() setInvisible: Observable<void>; 
  visibility: boolean;
  cuenta: CuentaPedido
  productos: ProductoCuenta[];
  constructor(private pedidosService: GlobalService) { }

  ngOnInit() {
    this.productos = [];
    this.setVisible.subscribe(id => {
      this.cuenta = this.pedidosService.getCuentaPedido(id);
      this.pedidosService.getProductosCuentaPedido(id).subscribe(res => {
        this.productos = res;
      })
      this.showModal();
    });
    this.setInvisible.subscribe(() => { 
      this.hideModal();
    });
  }
  showModal(){
    this.visibility = true;
  }
  hideModal(){
    this.visibility = false;
  }
  changeEstadoCuenta(estado:number){
    this.pedidosService.setEstadoPedidoToCuentaPedido(this.cuenta.id, estado);
    this.hideModal();
  }
}
