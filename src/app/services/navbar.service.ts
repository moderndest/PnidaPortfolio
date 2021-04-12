import { Injectable,OnInit  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService implements OnInit {

  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentShowNav = this.showNav$.asObservable();
  visible: boolean;
  navBg ={};

  ngOnInit() {
  }

  constructor() { 
    this.visible = false;
    this.navBg = {"background-color":"transparent" };
  }

  // hide background and Pnida text
  hide() { 
    this.visible = false; 
    this.navBg={"background-color": "transparent"};
  }

  show() { 
    this.visible = true; 
    this.navBg={"background-color": "white"};
  }

  toggle() { this.visible = !this.visible; }

  // doSomethingElseUseful() { }


  // Navbar toggle
  getShowNav(){
    return this.currentShowNav;
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }

}
