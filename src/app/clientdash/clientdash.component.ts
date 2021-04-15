import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-clientdash',
  templateUrl: './clientdash.component.html',
  styleUrls: ['./clientdash.component.scss']
})
export class ClientdashComponent implements OnInit {

  // private password =false;
  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  routerClick(){
    this.nav.hide();
  }
}
