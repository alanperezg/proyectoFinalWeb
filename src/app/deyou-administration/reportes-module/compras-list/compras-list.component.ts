import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../../../beans/Venta';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {
  @Input() ventas: Venta[];
  constructor() { }

  ngOnInit() {
  }

}
