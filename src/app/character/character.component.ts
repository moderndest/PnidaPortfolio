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
    { src:['assets/character/thaiDance_cdc.jpg', 'assets/character/Thaidancesketch.svg'], onclick: false},
    { src:['assets/character/Meh_001.jpg','assets/character/CDCweb.svg'], onclick: false},
    { src:['assets/character/link.svg','assets/character/zelda.svg'], onclick: false},
    { src:['assets/character/Ninja_cat.jpg'], onclick: false},
    { src:['assets/character/bettlefood.svg'], onclick: false},
    { src:['assets/character/copperB.svg', 'assets/character/copB_expression.svg', 'assets/character/cop-B pose.svg'], onclick: false},
    { src:['assets/character/shinabu.svg'], onclick: false},
    { src:['assets/character/RE_001.jpg'], onclick: false},
    { src:['assets/character/haku.svg'], onclick: false},
    { src:['assets/character/Yokai_CDC_pulish copy.jpg'], onclick: false},
    { src:['assets/character/Racingbot.jpg'], onclick: false},
    { src:['assets/character/joker.svg'], onclick: false}
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


