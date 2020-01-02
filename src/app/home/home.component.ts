import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   x="Data";
  constructor() { }

  ngOnInit() {
    this.x=this.x+" Swetha";
  }
  fnclick()
  {
    this.x=this.x+" S";
  }

}
