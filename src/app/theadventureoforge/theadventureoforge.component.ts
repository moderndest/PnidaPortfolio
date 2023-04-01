import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-theadventureoforge',
  templateUrl: './theadventureoforge.component.html',
  styleUrls: ['./theadventureoforge.component.scss']
})
export class TheadventureoforgeComponent implements OnInit {

  constructor(public nav:NavbarService, private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/home']);
  }
}
