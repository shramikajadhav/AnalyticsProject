import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnackListComponent }    from './snack-list.component';
import { SnackDetailComponent }  from './snack-detail.component';



const snacksRoutes: Routes = [
  { path: 'snacks', redirectTo: '/snacks' },
  { path: 'snack/:id', redirectTo: '/snack/:id' },
  { path: 'snacks',  component: SnackListComponent },
  { path: 'snack/:id', component: SnackDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(snacksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SnackRoutingModule { }
