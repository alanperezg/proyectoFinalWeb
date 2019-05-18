import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subject } from 'rxjs';
import { GlobalService } from '../../../global.service';
import { Cuenta } from '../../../beans/Cuenta';
import { ProductoCuenta } from '../../../beans/ProductoCuenta';

@Component({
  selector: 'app-cuenta-module',
  templateUrl: './cuenta-module.component.html',
  styleUrls: ['./cuenta-module.component.css']
})
export class CuentaModuleComponent implements OnInit {
  addProductoModalVisibility: Subject<boolean> = new Subject<boolean>();
  cuentaId: string;
  cuenta: Cuenta;
  productosCuenta: ProductoCuenta[]
  total: number;
  constructor(private router: Router, private route: ActivatedRoute, private cuentasService: GlobalService) { }

  ngOnInit() {
    this.productosCuenta = [];
    this.cuenta = new Cuenta("", "", "", "", "", "", "", "", "", "", "", "", 0, 1, 0);
    this.route.params.subscribe(params => {
      this.cuentaId = params.id;
    });
    this.cuentasService.getCuenta(this.cuentaId).subscribe((res) => {
      this.cuenta = res;
    });
    this.cuentasService.getProductosCuenta(this.cuentaId).subscribe((res) => {
      this.productosCuenta = res;
      this.calculateTotal();
    });
    this.cuentasService.productosCuentaSubject.subscribe((productos) => {
      this.productosCuenta = productos;
      this.calculateTotal();
    })
    this.calculateTotal();
  }
  addProductOpenModal(){
    this.addProductoModalVisibility.next(true);
  }
  cerrarCuenta(){
    this.cuentasService.cerrarCuenta(this.cuentaId);
    this.router.navigate(['/admin']);
  }
  calculateTotal(){
    this.total = 0;
    this.productosCuenta.forEach(e =>{
      this.total+=(e.precio*e.cantidad);
    });
  }
}
