import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-muppo',
  templateUrl: './muppo.component.html',
  styleUrls: ['./muppo.component.scss']
})
export class MuppoComponent implements OnInit {

  constructor( public nav: NavbarService) { }

  ngOnInit(){
    this.nav.hide();

  }

}
