import { Component, OnInit, Input} from '@angular/core';
import { Cuenta } from '../../../../beans/Cuenta';
@Component({
  selector: 'app-cuentas-list-item',
  templateUrl: './cuentas-list-item.component.html',
  styleUrls: ['./cuentas-list-item.component.css']
})
export class CuentasListItemComponent implements OnInit {
  @Input() cuenta: Cuenta;
  constructor() { }

  ngOnInit() {
    
  }

}
