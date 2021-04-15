import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {

  hidepic:boolean = false;
   imageData= [
    { src:['assets/sketch/sketch09.svg', 'assets/sketch/sketch08.svg', 'assets/sketch/sketch07.svg','assets/sketch/sketch06.svg', 'assets/sketch/sketch05.svg'], onclick: false},
    { src:['assets/sketch/sketch01.svg', 'assets/sketch/sketch02.svg', 'assets/sketch/sketch03.svg','assets/sketch/sketch04.svg'], onclick: false},
    { src:['assets/sketch/sketch10.svg','assets/sketch/sketch11.svg'], onclick: false}
  ]

  constructor(public nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }


  onClicked(num:number){

    this.hidepic = true;
    var i;
    for(i=0; i <this.imageData.length; i++)
    {
      if(i === num){
        this.imageData[num].onclick = true;
        
      } else{
        this.imageData[i].onclick = false;
      }
      
    }

  }

  goBack(){
    this.hidepic=false;
    var i;
    for(i=0; i <this.imageData.length; i++)
    {
     
        this.imageData[i].onclick = false;
      
    }
  }

}
