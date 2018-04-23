import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Snack, SnackService }  from './snack.service';

@Component({
  template: `
    <h2>Snacks!!</h2>
    <ul class="items">
      <li *ngFor="let snack of snacks$ | async"
        [class.selected]="snack.id === selectedId">
        <a [routerLink]="['/snack', snack.id]">
          <span class="badge">{{ snack.id }}</span><span class="badge">{{ snack.name }}</span></a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class SnackListComponent implements OnInit {
  snacks$: Observable<Snack[]>;

  private selectedId: number;

  constructor(
    private service: SnackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snacks$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getSnacks();
      });
  }
}
