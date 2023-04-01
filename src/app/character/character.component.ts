import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  hidepic:boolean = false;
   imageData= [
    { src:['assets/character/thaiDance_cdc.jpg', 'assets/character/Thaidancesketch.webp'], onclick: false},
    { src:['assets/character/Meh_001.jpg','assets/character/CDCweb.webp'], onclick: false},
    { src:['assets/character/link.webp','assets/character/zelda.webp'], onclick: false},
    { src:['assets/character/Ninja_cat.jpg'], onclick: false},
    { src:['assets/character/bettlefood.webp'], onclick: false},
    { src:['assets/character/copperB.webp', 'assets/character/copB_expression.webp', 'assets/character/cop-B pose.webp'], onclick: false},
    { src:['assets/character/shinabu.webp'], onclick: false},
    { src:['assets/character/RE_001.jpg'], onclick: false},
    { src:['assets/character/haku.webp'], onclick: false},
    { src:['assets/character/Yokai_CDC_pulish copy.jpg'], onclick: false},
    { src:['assets/character/Racingbot.jpg'], onclick: false},
    { src:['assets/character/joker.webp'], onclick: false}
  ]

  constructor(public nav:NavbarService) { }
  

  ngOnInit(){
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


