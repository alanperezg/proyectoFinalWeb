import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { DeyuoMainComponent } from './deyuo-main/deyuo-main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatMenuModule, MatMenuItem, MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent } from './deyuo-main/menu/menu.component';
import { ContactoComponent } from './deyuo-main/contacto/contacto.component';
import { LoginComponent } from './deyuo-main/login/login.component';
import { MainUsuarioComponent } from './deyuo-main/main-usuario/main-usuario.component';
import { MainEmpleadoComponent } from './deyuo-main/main-empleado/main-empleado.component';
import { PromoMainComponent } from './deyuo-main/promo-main/promo-main.component';
import { MicarritoMainComponent } from './deyuo-main/micarrito-main/micarrito-main.component';
import { ItemMenuComponent } from './deyuo-main/menu/item-menu/item-menu.component';
import { DeyouAdministrationComponent } from './deyou-administration/deyou-administration.component';
import { SidebarAdministationComponent } from './deyou-administration/sidebar-administation/sidebar-administation.component';
import { LocalModuleComponent } from './deyou-administration/local-module/local-module.component';
import { CuentasListComponent } from './deyou-administration/local-module/cuentas-list/cuentas-list.component';
import { CuentasListItemComponent } from './deyou-administration/local-module/cuentas-list/cuentas-list-item/cuentas-list-item.component';
import { ButtonComponent } from './button/button.component';
import { CuentaModuleComponent } from './deyou-administration/local-module/cuenta-module/cuenta-module.component';
import { ProductosListComponent } from './deyou-administration/local-module/cuenta-module/productos-list/productos-list.component';
import { ProductosListItemComponent } from './deyou-administration/local-module/cuenta-module/productos-list/productos-list-item/productos-list-item.component';
import { CuentaModalComponent } from './deyou-administration/local-module/cuenta-modal/cuenta-modal.component';
import { AddProductosModalComponent } from './deyou-administration/local-module/cuenta-module/add-productos-modal/add-productos-modal.component';
import { AddProductoModalCategoriasListComponent } from './deyou-administration/local-module/cuenta-module/add-productos-modal/add-producto-modal-categorias-list/add-producto-modal-categorias-list.component';
import { AddProductoModalCategoriasListItemComponent } from './deyou-administration/local-module/cuenta-module/add-productos-modal/add-producto-modal-categorias-list/add-producto-modal-categorias-list-item/add-producto-modal-categorias-list-item.component';
import { AddProductoModalProductosListComponent } from './deyou-administration/local-module/cuenta-module/add-productos-modal/add-producto-modal-productos-list/add-producto-modal-productos-list.component';
import { AddProductoModalProductosListItemComponent } from './deyou-administration/local-module/cuenta-module/add-productos-modal/add-producto-modal-productos-list/add-producto-modal-productos-list-item/add-producto-modal-productos-list-item.component';
import { AdministrationHeaderComponent } from './deyou-administration/administration-header/administration-header.component';
import { PedidosModuleComponent } from './deyou-administration/pedidos-module/pedidos-module.component';
import { PedidosListComponent } from './deyou-administration/pedidos-module/pedidos-list/pedidos-list.component';
import { PedidosListItemComponent } from './deyou-administration/pedidos-module/pedidos-list/pedidos-list-item/pedidos-list-item.component';
import { DeyouAdministrationLoginComponent } from './deyou-administration-login/deyou-administration-login.component';
import { PedidoModalComponent } from './deyou-administration/pedidos-module/pedido-modal/pedido-modal.component';
import { PedidoModalProductosListItemComponent } from './deyou-administration/pedidos-module/pedido-modal/pedido-modal-productos-list-item/pedido-modal-productos-list-item.component';
import { ReportesModuleComponent } from './deyou-administration/reportes-module/reportes-module.component';
import { ComprasListComponent } from './deyou-administration/reportes-module/compras-list/compras-list.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DeyuoMainComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ContactoComponent,
    LoginComponent,
    MainUsuarioComponent,
    MainEmpleadoComponent,
    PromoMainComponent,
    MicarritoMainComponent,
    ItemMenuComponent,
    DeyouAdministrationComponent,
    SidebarAdministationComponent,
    LocalModuleComponent,
    ButtonComponent,
    CuentasListComponent,
    CuentasListItemComponent,
    CuentaModuleComponent,
    ProductosListComponent,
    ProductosListItemComponent,
    CuentaModalComponent,
    AddProductosModalComponent,
    AddProductoModalCategoriasListComponent,
    AddProductoModalCategoriasListItemComponent,
    AddProductoModalProductosListComponent,
    AddProductoModalProductosListItemComponent,
    AdministrationHeaderComponent,
    PedidosModuleComponent,
    PedidosListComponent,
    PedidosListItemComponent,
    DeyouAdministrationLoginComponent,
    PedidoModalComponent,
    PedidoModalProductosListItemComponent,
    ReportesModuleComponent,
    ComprasListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
