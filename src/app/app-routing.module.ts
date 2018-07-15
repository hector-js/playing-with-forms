import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'modules/page-one/page-one.module#PageOneModule'
  },
  {
    path: 'page-one',
    loadChildren: 'modules/page-one/page-one.module#PageOneModule'
  },
  {
    path: 'page-two',
    loadChildren: 'modules/page-two/page-two.module#PageTwoModule'
  },
  {
    path: 'page-three',
    loadChildren: 'modules/page-three/page-three.module#PageThreeModule'
  },
  {
    path: 'page-four',
    loadChildren: 'modules/page-four/page-four.module#PageFourModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
