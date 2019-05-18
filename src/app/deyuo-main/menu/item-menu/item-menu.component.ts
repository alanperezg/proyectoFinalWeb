import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
   @Input() producto: Producto;
   ImageProd: string ='assets/img/rollo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
