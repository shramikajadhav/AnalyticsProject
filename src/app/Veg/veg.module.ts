import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { VegListComponent }    from './veg-list.component';
import { VegDetailComponent }  from './veg-detail.component';

import { VegService } from './veg.service';

import { VegRoutingModule } from './veg-routing.module';
import {HomeComponent} from './home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VegRoutingModule
  ],
  declarations: [
    VegListComponent,
    VegDetailComponent,
    HomeComponent,

  ],
  providers: [ VegService ]
})
export class VeggiesModule {}
