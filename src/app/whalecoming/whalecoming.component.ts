import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whalecoming',
  templateUrl: './whalecoming.component.html',
  styleUrls: ['./whalecoming.component.scss']
})
export class WhalecomingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/environment']);
  }

}
