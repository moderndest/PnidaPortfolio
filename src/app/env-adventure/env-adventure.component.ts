import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-env-adventure',
  templateUrl: './env-adventure.component.html',
  styleUrls: ['./env-adventure.component.scss']
})
export class EnvAdventureComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/environment']);
  }

}
