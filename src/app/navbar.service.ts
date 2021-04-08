import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  navBg ={};
  

  constructor() { 
    this.visible = false;
    this.navBg = {"background-color":"transparent" };
  }

  hide() { 
    this.visible = false; 
    this.navBg={"background-color": "transparent"};
  }

  show() { 
    this.visible = true; 
    this.navBg={"background-color": "white"};
  }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

}
