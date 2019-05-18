import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="callout">
    <h1>{{Title}}</h1>
  </div>
  <img class="img-background" src="{{SRC}}" alt="">`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Title: string = 'Bienvenido';
  SRC: string = 'assets/img/sushi2.gif';

  constructor() { }

  ngOnInit() {
  }

}
