import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { VeggiesModule }            from './Veg/veg.module';
import { PageNotFoundComponent }   from './not-found.component';
import { DialogService } from 'app/dialog.service';
import {SnackModule} from './Snacks/snack.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    VeggiesModule,
    SnackModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
