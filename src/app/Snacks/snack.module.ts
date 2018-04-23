import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SnackListComponent }    from './snack-list.component';
import { SnackDetailComponent }  from './snack-detail.component';

import { SnackService } from './snack.service';

import { SnackRoutingModule } from './snack-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnackRoutingModule
  ],
  declarations: [
    SnackListComponent,
    SnackDetailComponent

  ],
  providers: [ SnackService ]
})
export class SnackModule {}
