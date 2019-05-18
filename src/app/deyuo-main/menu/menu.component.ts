import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../models/acceso';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  datos: Acceso[];
  constructor(private globalSerivice: GlobalService) { }

  ngOnInit() {
    this.datos = this.globalSerivice.getAccesos();
  }

}
