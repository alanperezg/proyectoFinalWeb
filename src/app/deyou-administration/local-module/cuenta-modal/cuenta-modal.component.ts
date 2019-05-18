import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../../global.service';
import { Cuenta } from '../../../beans/Cuenta';
import { Mesa } from '../../../beans/Mesa';
import { Mesero } from '../../../beans/Mesero';

@Component({
  selector: 'app-cuenta-modal',
  templateUrl: './cuenta-modal.component.html',
  styleUrls: ['./cuenta-modal.component.css']
})
export class CuentaModalComponent implements OnInit {
  visibility: boolean;
  meseros: Mesero[];
  mesero: string;
  mesa: string;
  mesas: Mesa[];
  @Input() setVisibility: Observable<boolean>; 
  constructor(private cuentasService: GlobalService) {}
  ngOnInit() {
    this.setVisibility.subscribe((status)=>{
      if(status){
        this.showModal();
      }else{
        this.hideModal();
      }
    }); 
  }
  showModal(){
    this.visibility = true;
    this.mesas = [];
    this.cuentasService.getMesasDisponibles().subscribe(res => {
      this.mesas = res;
      if(this.mesas.length > 0){
        this.mesa = this.mesas[0].id;
      }else{
        this.mesa = "";
      }
    });
    this.cuentasService.getMeserosDisponibles().subscribe(res => {
      this.meseros = res;
      if(this.meseros.length > 0){
        this.mesero = this.meseros[0].id;
      }else{
        this.mesero = "";
      }
    });
  }
  hideModal(){
    this.visibility = false;
  }
  abrirCuenta(formulario : NgForm){
    let cuenta: Cuenta;
    cuenta = new Cuenta(null, this.mesa, "", this.mesero, "", "", "", "", "","", "", "", 0, 1, 0);
    this.cuentasService.abrirCuenta(cuenta);
    this.hideModal();
  }
}
