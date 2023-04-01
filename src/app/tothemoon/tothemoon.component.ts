import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tothemoon',
  templateUrl: './tothemoon.component.html',
  styleUrls: ['./tothemoon.component.scss']
})
export class TothemoonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/environment']);
  }

}
