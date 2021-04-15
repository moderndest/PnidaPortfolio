import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-bountybrawl',
  templateUrl: './bountybrawl.component.html',
  styleUrls: ['./bountybrawl.component.scss']
})
export class BountybrawlComponent implements OnInit {

  constructor(public nav:NavbarService,private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
  }
  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/client']);
  }

}
