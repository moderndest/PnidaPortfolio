import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  hidepic:boolean = false;
  imageData= [
    { src:['assets/env/panida-ratarasan-asset-7.svg'], onclick: false}


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
