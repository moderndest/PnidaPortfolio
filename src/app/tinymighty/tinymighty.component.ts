import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-tinymighty',
  templateUrl: './tinymighty.component.html',
  styleUrls: ['./tinymighty.component.scss']
})
export class TinymightyComponent implements OnInit {

  constructor(public nav:NavbarService, private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/client']);
  }
}
