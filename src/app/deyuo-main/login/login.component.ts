import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acceso } from '../../models/acceso';
import { GlobalService } from '../../global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  //templateUrl: './login.component.html',
  template:`
  <div class="formContainer"> 
  <h1>Iniciar Sesión</h1>
    <form #f="ngForm" (ngSubmit)="access(f)" >
      <input type="text" [class.invalide]="!validAccess" ngModel name="usuario" placeholder="Usuario" (change)="onChangeInput()" required>     
      <div class="form-group">
          <input [class.invalide]="!validAccess" [type]="hide ? 'password' : 'text'" ngModel name="contrasena" (change)="onChangeInput()" placeholder="Contraseña" required>
          <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
      </div>
      <div *ngIf="!validAccess" role="alert" class="alert alert-danger"><strong>Datos incorrectos</strong></div>
      <button type="submit" [disabled]="!f.valid" class="btn btn-primary btn-block btn-large">Ingresar</button>      
    </form>
    <button mat-button class="btn btn-secondary btn-block btn-large btn-register">Registrar</button>
</div>
<img class="img-background" src="{{SRC}}" alt="">`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acceso: Acceso;
  hide:boolean = true; 
  validAccess: boolean = true;
  SRC: string = 'assets/img/sushi.gif';
  constructor(private router: Router, private route: ActivatedRoute, private globalService: GlobalService) { }
  
  ngOnInit() {
  }

  access(formulario: NgForm) {
    
    this.acceso = Object.assign({},
      this.globalService.validarAcceso(formulario.controls.usuario.value,
        formulario.controls.contrasena.value));
    
    if(this.globalService.getStatusLog()){
      this.validAccess = true;
      if(this.acceso.tipoUsuario == 1){
        this.router.navigate(['/empleado',this.acceso.id],{relativeTo: this.route});
      }else{
      this.router.navigate(['/usuario',this.acceso.id],{relativeTo: this.route});
      }
    }
    this.validAccess = false;
    formulario.reset();
  }

  onChangeInput(){
    this.validAccess = true;
  }
}
