import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VegListComponent }    from './veg-list.component';
import { VegDetailComponent }  from './veg-detail.component';
import {HomeComponent} from './home.component';


const veggiesRoutes: Routes = [
  { path: 'veggies', redirectTo: '/veggies' },
  { path: 'veg/:id', redirectTo: '/veg/:id' },
  { path: 'veggies',  component: VegListComponent },
  { path: 'veg/:id', component: VegDetailComponent },
  {path:'home', component:HomeComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(veggiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VegRoutingModule { }
