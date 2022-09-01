import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Input() logo:string=''
  burgerMenuActive:boolean=false
  ngOnInit(): void {
  }

  burgerIconClicked(){
    this.burgerMenuActive=!this.burgerMenuActive
    console.log('clicked');
  }
}
