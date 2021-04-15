import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
