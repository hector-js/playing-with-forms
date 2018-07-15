import { Component, OnInit } from '@angular/core';
import { PageFourService } from '../../service/page-four.service';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {

  constructor(public pageFourService: PageFourService) { }

  ngOnInit() {
  }

  onClick() {
    this.pageFourService.sendMessage('continue');
  }

  onBack() {
    this.pageFourService.sendMessage('back');
  }

}
