import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Cuenta } from '../../beans/Cuenta';
import { CuentaPedido } from '../../beans/CuentaPedido';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-administation',
  templateUrl: './sidebar-administation.component.html',
  styleUrls: ['./sidebar-administation.component.css']
})
export class SidebarAdministationComponent implements OnInit {
  cuentasLocal: Cuenta[];
  cuentasPedido: CuentaPedido[];
  currentTab: number;
  params: number;
  constructor(private notificationService: GlobalService, private router: Router, private route: ActivatedRoute) { }
  reloadNotifications(){
    setTimeout(() => {
      this.notificationService.getCuentas().subscribe(res =>{
        this.cuentasLocal = res;
      });
      this.cuentasPedido = this.notificationService.getCuentaPedidos();
      this.reloadNotifications();
    }, 2000);
  }
  getCurrentTab(url:string){
    if(url == '/admin' || url.includes('/admin/cuenta/')){
      this.currentTab = 0;
    }else if(url == '/admin/pedidos'){
      this.currentTab = 1;
    }else if(url == '/admin/reportes'){
      this.currentTab = 3;
   }
  }
  ngOnInit() {
    this.cuentasLocal = [];
    this.getCurrentTab(this.router.url);
    this.router.events.subscribe(res => {
      if(res instanceof NavigationEnd){
        this.getCurrentTab(res.url);
      }
    });
    this.notificationService.getCuentas().subscribe(res => {
      this.cuentasLocal = res;
    });
    this.cuentasPedido = this.notificationService.getCuentaPedidos();
    this.notificationService.cuentasSubject.subscribe(res => {
      this.cuentasLocal = res;
    });
    this.notificationService.cambioCuentaPedidos.subscribe(res => {
      this.cuentasPedido = res;
    });
    this.reloadNotifications();
  }
}
