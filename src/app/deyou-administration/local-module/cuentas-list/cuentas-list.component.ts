import { Component, OnInit, Input } from '@angular/core';
import { Cuenta } from '../../../beans/Cuenta';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-cuentas-list',
  templateUrl: './cuentas-list.component.html',
  styleUrls: ['./cuentas-list.component.css']
})
export class CuentasListComponent implements OnInit {
  @Input() listTitle: string;
  cuentas: Cuenta[];
  constructor(private cuentasService: GlobalService) { }

  ngOnInit() {
    this.cuentas = [];
    this.cuentasService.getCuentas().subscribe(res => {
      this.cuentas = res;
    });
    this.cuentasService.cuentasSubject.subscribe((cuentas: Cuenta[]) => {
      this.cuentas = cuentas;
      console.log("que onda");
    });
  }

}
