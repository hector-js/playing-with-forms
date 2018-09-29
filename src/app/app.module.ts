import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationService } from '../modules/navigation';
import { PageFourModule } from '../modules/page-four/page-four.module';
import { PageFourService } from '../modules/page-four/service/page-four.service';
import { PageOneModule } from '../modules/page-one/page-one.module';
import { PageOneService } from '../modules/page-one/service/page-one.service';
import { PageThreeModule } from '../modules/page-three/page-three.module';
import { PageThreeService } from '../modules/page-three/service/page-three.service';
import { PageTwoModule } from '../modules/page-two/page-two.module';
import { PageTwoService } from '../modules/page-two/service/page-two.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationService } from './core/services/app-navigation/app-navigation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PageOneModule,
    PageTwoModule,
    PageThreeModule,
    PageFourModule
  ],
  providers: [
    NavigationService,
    PageOneService,
    PageTwoService,
    PageThreeService,
    PageFourService,
    AppNavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
