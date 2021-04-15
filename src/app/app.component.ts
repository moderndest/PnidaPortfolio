import { Component, ElementRef, ViewChild } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Pranida Portfolio';
  @ViewChild('mySidenav', { static: false })
  sidebar!: ElementRef;
  // public isActive = false;

  // public devWidth = window.width();
  
  
  constructor(public router:Router,  public nav: NavbarService, private elem: ElementRef){
    // this.sidebar.nativeElement.style.width = "0";
    this.nav.show();
  }
  ngOnInit(){
    
    // console.log(this.isActive);
    
    window.onbeforeunload = () => {
      window.scrollTo(0,0);
    }
    this.router.events.subscribe(evt=>{
      if(!(evt instanceof NavigationEnd)){ return;}
      window.scrollTo(0,0);
    })
  }
  // ngAfterViewInit(){
  //   this.nav.show();
  // }
  homeNavClick(){
    this.nav.show();
    this.sidebar.nativeElement.style.width = "0";
    
  }

  navOnClick(){
    this.sidebar.nativeElement.style.width = "40%";
    // console.log(this.isActive);

  }

  openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    this.sidebar.nativeElement.style.width = "0";
    this.nav.hide();
  }
  closeIconNav() {
    this.sidebar.nativeElement.style.width = "0";
    
  }
  
}
