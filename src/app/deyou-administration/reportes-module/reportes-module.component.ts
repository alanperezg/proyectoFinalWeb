import { Component, OnInit } from '@angular/core';
import { Venta } from '../../beans/Venta';
import { Mesero } from '../../beans/Mesero';

@Component({
  selector: 'app-reportes-module',
  templateUrl: './reportes-module.component.html',
  styleUrls: ['./reportes-module.component.css']
})
export class ReportesModuleComponent implements OnInit {
  ventas: Venta[];
  meseros: Mesero[];
  filterMesero: number;
  filterVenta: number;
  numeroVentas: string;
  totalVentas: string;
  topVenta: string;
  promedioVenta: string
  constructor() { }
  calculateTableros(){
    let tempTotalVentas = 0;
    let tempTopVentas = 0;
    this.numeroVentas = this.ventas.length+"";
    this.ventas.forEach(e => {
      tempTotalVentas+=e.total;
      if(e.total > tempTopVentas){
        tempTopVentas = e.total;
      }
    });
    this.totalVentas = tempTotalVentas.toFixed(2);
    this.topVenta = tempTopVentas.toFixed(2);
    this.promedioVenta = (tempTotalVentas/this.ventas.length).toFixed(2);
  }
  ngOnInit() {
    this.ventas = [new Venta(1,new Date(), 0, "Alan Pérez", "", 100), new Venta(2, new Date(), 0, "Dalila Pérez", "Francisco Hernandez", 1500), new Venta(3,new Date(), 0, "", "Francisco Hernandez", 100)];
    this.filterMesero = -1;
    this.filterVenta = 2;
    this.calculateTableros();
  }

}
