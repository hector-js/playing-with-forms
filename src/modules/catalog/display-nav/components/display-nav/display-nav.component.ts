import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-nav',
  templateUrl: './display-nav.component.html',
  styleUrls: ['./display-nav.component.css']
})
export class DisplayNavComponent implements OnInit {

  stage: number | string;

  @ViewChild('circle') private circle: any;
  @ViewChild('text') private text: any;

  constructor() { }

  ngOnInit() {
    this.stage = 0;
  }

  @Input('counter')
  set counter(value: number | string) {
    const element: HTMLElement = this.text.nativeElement;
    this.stage = value as number;
  }

  @Input('color')
  set color(colors: string[]) {
    const element: HTMLElement = this.circle.nativeElement;
    if (colors) {
      element.setAttribute('stroke', colors[0]);
      element.setAttribute('fill', colors[1]);
    }

  }

}
