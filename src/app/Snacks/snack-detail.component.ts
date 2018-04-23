import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { Snack, SnackService }  from './snack.service';

@Component({
  template: `
  <h2>Snack : </h2>
  <div *ngIf="snack$ | async as snack">
    <h3>"{{ snack.name }}"</h3>
    <div>
      <label>Id: </label>{{ snack.id }}
      <label>Portion size: </label>{{ snack.portion }}
      <label>Price: </label>{{ snack.price }}
      <label>Calories: </label>{{ snack.calories }}
    </div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="snack.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoSnacks(snack)">Back</button>
    </p>
  </div>
  `,
  animations: [ slideInDownAnimation ]
})
export class SnackDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  snack$: Observable<Snack>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SnackService
  ) {}

  ngOnInit() {
    this.snack$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getSnack(params.get('id')));
  }

  gotoSnacks(snack: Snack) {
    let snackId = snack ? snack.id : null;
    this.router.navigate(['/snacks', { id: snackId, foo: 'foo' }]);
  }
}
