import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-usuario',
  templateUrl: './main-usuario.component.html',
  styleUrls: ['./main-usuario.component.css']
})
export class MainUsuarioComponent implements OnInit {
  id: number;
  MiPedidoImg: string ='assets/img/newProductIcon.png';
  CrearPedidoImg: string ='assets/img/surveyIcon.png';
  MiCarritoImg: string ='assets/img/shopIcon.png';
  SlideImg1: string ='assets/img/slide1Img.jpg';
  SlideImg2: string ='assets/img/slide2Img.jpg';
  SlideImg3: string ='assets/img/slide3Img.jpg';

 constructor(private router: Router, private route: ActivatedRoute, configCarousel: NgbCarouselConfig) {
    configCarousel.interval = 3000;
    configCarousel.keyboard = true;
    configCarousel.showNavigationIndicators = false;
}

ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
    });
    console.log(this.id);
  }

}
