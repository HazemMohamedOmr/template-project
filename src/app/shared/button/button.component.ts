import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title:string = "button";
  @Input() shape:string = "straight";
  @Input() color?:string
  @Input() bgColor?:string
  @Input() width?:string
  @Input() height?:string
  @Input() fontSize?:string
  @Input() fontWeight?:string
  @Input() icon?:string;

  currentStyles: Record<string, string> = {};

  constructor() { }

  ngOnInit(): void {
    this.currentStyles = {
      'color':  this.color || 'gray',
      'background-color': this.bgColor || "purple",
      'font-size': this.fontSize || "1rem",
      'font-weight': this.fontWeight || "400",
      'width': this.width || '',
      'height': this.height || '', 
    };
  }

}
