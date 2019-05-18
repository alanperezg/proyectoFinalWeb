import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-local-module',
  templateUrl: './local-module.component.html',
  styleUrls: ['./local-module.component.css']
})
export class LocalModuleComponent implements OnInit {
  cuentaModalVisibility: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnInit() {
  }
  openCuentaModal(){
    this.cuentaModalVisibility.next(true);
  }
}
