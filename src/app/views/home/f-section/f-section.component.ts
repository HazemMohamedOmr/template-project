import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-section',
  templateUrl: './f-section.component.html',
  styleUrls: ['./f-section.component.css']
})
export class FSectionComponent implements OnInit {

  products:any = [];

  constructor() {
    this.products = [
      {title: 'hazem', price: 65},
      {title: 'ahmed', price: 50},
      {title: 'abdo', price: -1},
      {title: 'eso', price: 30}
    ]
   }

  ngOnInit(): void {
  }

}
