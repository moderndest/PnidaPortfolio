import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {

  hidepic:boolean = false;
  imageData= [
    { src:['assets/illustration/lofi_challenge.jpg'], onclick: false},
    { src:['assets/illustration/catplace.svg'], onclick: false},
    { src:['assets/illustration/Seraphine_002.jpg'], onclick: false},
    { src:['assets/illustration/kiki.svg'], onclick: false},
    { src:['assets/illustration/neighbor.svg'], onclick: false},


  ]
  constructor(public nav:NavbarService) { }

  
  ngOnInit(){
    this.nav.hide();
  }

  onClicked(num:number){

    this.hidepic = true;
    var i;
    for(i=0; i <5; i++)
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
    for(i=0; i <5; i++)
    {
     
        this.imageData[i].onclick = false;
      
    }
  }

}
