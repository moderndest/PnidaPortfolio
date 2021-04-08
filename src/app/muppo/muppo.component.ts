import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-muppo',
  templateUrl: './muppo.component.html',
  styleUrls: ['./muppo.component.scss']
})
export class MuppoComponent implements OnInit {

  constructor( public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();

  }

}
