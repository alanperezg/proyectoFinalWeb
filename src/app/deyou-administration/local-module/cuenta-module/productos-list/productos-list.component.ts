import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductoCuenta } from '../../../../beans/ProductoCuenta';
import { GlobalService } from '../../../../global.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  @Input() listTitle:string;
  @Input() productos: ProductoCuenta[];
  @Output() addProductoClick = new EventEmitter();
  constructor(private cuentasService: GlobalService) { }

  ngOnInit() {
  }
  addProductoBtn(){
    this.addProductoClick.emit();
  }
}
