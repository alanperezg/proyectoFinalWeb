import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../../../../beans/Categoria';

@Component({
  selector: 'app-add-producto-modal-categorias-list-item',
  templateUrl: './add-producto-modal-categorias-list-item.component.html',
  styleUrls: ['./add-producto-modal-categorias-list-item.component.css']
})
export class AddProductoModalCategoriasListItemComponent implements OnInit {

  constructor() { }
  @Input() categoria: Categoria;
  @Output() categoriaEvent = new EventEmitter();
  ngOnInit() {
  }
  categoriaClick(){
    this.categoriaEvent.emit(this.categoria.id);
  }

}
