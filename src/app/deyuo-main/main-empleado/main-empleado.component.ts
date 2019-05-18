import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-empleado',
  templateUrl: './main-empleado.component.html',
  styleUrls: ['./main-empleado.component.css']
})
export class MainEmpleadoComponent implements OnInit {
  id: number;
  OrdenesImg: string = 'assets/img/bookIcon.png';
  AbrirCuentaImg: string = 'assets/img/pencilIcon.png';
  ProductosImg: string = 'assets/img/foodIcon.png';
  UsuariosImg: string = 'assets/img/userIcon.png';
  GastosImg: string = 'assets/img/CoinsBlueCircle.png';
  ReportesImg: string = 'assets/img/surveyIcon.png';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
    });
    console.log(this.id);
  }

}
