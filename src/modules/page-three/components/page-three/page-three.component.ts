import { Component, OnInit } from '@angular/core';
import { PageThreeService } from '../../service/page-three.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  constructor(public pageThreeService: PageThreeService) { }

  ngOnInit() {
  }

  onClick() {
    this.pageThreeService.sendMessage('continue');
  }

  onBack() {
    this.pageThreeService.sendMessage('back');
  }
}
