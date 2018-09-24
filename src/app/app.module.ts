import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneModule } from '../modules/page-one/page-one.module';
import { PageTwoModule } from '../modules/page-two/page-two.module';
import { PageThreeModule } from '../modules/page-three/page-three.module';
import { PageFourModule } from '../modules/page-four/page-four.module';
import { PageOneService } from '../modules/page-one/service/page-one.service';
import { PageTwoService } from '../modules/page-two/service/page-two.service';
import { PageThreeService } from '../modules/page-three/service/page-three.service';
import { PageFourService } from '../modules/page-four/service/page-four.service';
import { AppRoutingModule } from './app-routing.module';
import { NavigationService } from '../modules/navigation';
import { AppNavigationService } from './core/services/app-navigation/app-navigation.service';
import { DobModule } from '../modules/catalog/dob/dob.module';
import { ReactiveFormsModule } from '@angular/forms';

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
