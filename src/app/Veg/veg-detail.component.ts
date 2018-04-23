import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { Veg, VegService }  from './veg.service';

@Component({
  template: `
  
  <div *ngIf="veg$ | async as veg">
    <h3>"{{ veg.name }}"</h3>
      <label>Id: </label>{{ veg.id }}
      <label>Portionsize: </label>{{ veg.portion }}
      <label>Price: </label>{{ veg.price }}
      <label>Cups: </label>{{ veg.calories }}
    <div>
      <h4>Edit name here and see quick result</h4>
      <label>Name: </label>
      <input [(ngModel)]="veg.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoVeggies(veg)">Back</button>
    </p>
  </div>
 
  `,
  animations: [ slideInDownAnimation ]
})
export class VegDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  veg$: Observable<Veg>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VegService
  ) {}

  ngOnInit() {
    this.veg$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getVeg(params.get('id')));
  }

  gotoVeggies(veg: Veg) {
    let vegId = veg ? veg.id : null;
    this.router.navigate(['/veggies', { id: vegId, foo: 'foo' }]);
  }
}
