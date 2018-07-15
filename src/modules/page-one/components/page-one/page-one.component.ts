import { Component, OnInit } from '@angular/core';
import { PageOneService } from '../../service/page-one.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(public pageOneService: PageOneService) { }

  ngOnInit() {
  }

  onClick() {
    this.pageOneService.sendMessage('continue');
  }

  onBack() {
    this.pageOneService.sendMessage('back');
  }


}
