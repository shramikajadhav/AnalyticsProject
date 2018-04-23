import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }    from './not-found.component';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import {VegListComponent} from './Veg/veg-list.component';
import {SnackListComponent} from './Snacks/snack-list.component';




const appRoutes: Routes = [


  {path:'veggies', component : VegListComponent},
  //{path:'snacks', component : SnackListComponent},
  {path: 'snacks', component : SnackListComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
