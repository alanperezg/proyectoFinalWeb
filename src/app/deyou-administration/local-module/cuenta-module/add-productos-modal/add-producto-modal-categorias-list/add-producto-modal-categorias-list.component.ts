import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CategoriaOrden } from '../../../../../beans/CategoriaOrden';

@Component({
  selector: 'app-add-producto-modal-categorias-list',
  templateUrl: './add-producto-modal-categorias-list.component.html',
  styleUrls: ['./add-producto-modal-categorias-list.component.css']
})
export class AddProductoModalCategoriasListComponent implements OnInit {
  @Output() categoriaClick = new EventEmitter();
  @Input() categorias: CategoriaOrden[];
  constructor() { }

  ngOnInit() {
  }
  categoriaEvent(id:number){
    this.categoriaClick.emit(id);
  }

}
