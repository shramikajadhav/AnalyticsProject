import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Veg, VegService }  from './veg.service';

@Component({
  template: `
    <h2>Veggies</h2>
    <ul class="items">
      <li *ngFor="let veg of veggies$ | async"
        [class.selected]="veg.id === selectedId">
        <a [routerLink]="['/veg', veg.id]">
          <span class="badge">{{ veg.id }}</span><span class="badge">{{ veg.name }}</span></a>
      </li>
    </ul>
  `
})
export class VegListComponent implements OnInit {
  veggies$: Observable<Veg[]>;

  private selectedId: number;

  constructor(
    private service: VegService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.veggies$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getVeggies();
      });
  }
}
