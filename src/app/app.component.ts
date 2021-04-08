import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pnida Portfolio';
  
  
  constructor(public router:Router,  public nav: NavbarService){}
  ngOnInit(){
    
    window.onbeforeunload = () => {
      window.scrollTo(0,0);
    }
    this.router.events.subscribe(evt=>{
      if(!(evt instanceof NavigationEnd)){ return;}
      window.scrollTo(0,0);
    })
  }
  ngAfterViewInit(){
    this.nav.show();
  }
  homeNavClick(){
    this.nav.show();
  }


  
}
