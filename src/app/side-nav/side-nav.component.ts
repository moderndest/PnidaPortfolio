import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from '../services/side-nav-direction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  showSideNav: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  // @Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private navService: NavbarService) {
    this.showSideNav = this.navService.getShowNav();
    console.log('this is show nav : '+ this.showSideNav);
  }

  ngOnInit() {
    // this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = 'left' + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle['left'] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }

}
