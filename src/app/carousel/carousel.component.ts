import { Component, Input, OnInit } from '@angular/core';


export interface carouselImages {
  imageSRC:string;
  imageALT:string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images:carouselImages[]=[]
  @Input() indicators:boolean=true;
  @Input() controls:boolean=true;
  selectedIndex=0;
  constructor() { }

  ngOnInit(): void {
  }
  selectImage(index:number){
    this.selectedIndex=index
  }
}
