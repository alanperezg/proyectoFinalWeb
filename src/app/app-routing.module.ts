import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './deyuo-main/login/login.component';
import { ContactoComponent } from './deyuo-main/contacto/contacto.component';
import { MenuComponent } from './deyuo-main/menu/menu.component';
import { MainEmpleadoComponent } from './deyuo-main/main-empleado/main-empleado.component';
import { MainUsuarioComponent } from './deyuo-main/main-usuario/main-usuario.component';
import { MicarritoMainComponent } from './deyuo-main/micarrito-main/micarrito-main.component';
import { PromoMainComponent } from './deyuo-main/promo-main/promo-main.component';
import { DeyouAdministrationComponent } from './deyou-administration/deyou-administration.component';
import { LocalModuleComponent } from './deyou-administration/local-module/local-module.component';
import { CuentaModuleComponent } from './deyou-administration/local-module/cuenta-module/cuenta-module.component';
import { PedidosModuleComponent } from './deyou-administration/pedidos-module/pedidos-module.component';
import { DeyouAdministrationLoginComponent } from './deyou-administration-login/deyou-administration-login.component';
import { ReportesModuleComponent } from './deyou-administration/reportes-module/reportes-module.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'empleado/:id', component:MainEmpleadoComponent},
  {path:'usuario/promociones',component:PromoMainComponent},
  {path:'usuario/micarrito', component:MicarritoMainComponent},
  {path:'usuario/:id', component:MainUsuarioComponent},
  {path:'menu',component:MenuComponent, children:[
    {path:'pedidoNuevo', component:MenuComponent}
  ]},
  {path:'promociones',component:PromoMainComponent},
  {path:'admin/login', component:DeyouAdministrationLoginComponent},
  {path:'admin', component:DeyouAdministrationComponent, children:[
    {path:'', component:LocalModuleComponent},
    {path:'cuenta/:id', component:CuentaModuleComponent},
    {path:'pedidos', component:PedidosModuleComponent},
    {path:'reportes', component:ReportesModuleComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
