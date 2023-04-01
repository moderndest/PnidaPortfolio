import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afternoontea',
  templateUrl: './afternoontea.component.html',
  styleUrls: ['./afternoontea.component.scss']
})
export class AfternoonteaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goBack(){
    // this.hidepic=false;
    this.router.navigate(['/environment']);
  }
}
