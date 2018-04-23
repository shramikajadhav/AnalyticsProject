import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Snack {
  constructor(public id: number, public name: string, public portion : number, public price : number, public calories : number) { }
}

const Snacks = [
  new Snack(1, 'Chocolate  candy', 	0.9,	0.24,	262),
  new Snack(2, 'Cookies ',	1,	0.16	,123),
  new Snack(3, 'Corn chips',	1	,0.21	,140),
new Snack(4,'Crackers ',	0.9	,0.16	,114),
new Snack(5,'Cupcakes ',	2,	0.34	,174),
new Snack(6, 'Donuts ',	2.1	,0.36,	235),
new Snack(7,'Fruit rolls',	0.8	,0.28,	82),
new Snack(8,'Graham crackers ', 	0.9	,0.14	,102),
new Snack(9,'Muffins	',3.3	,0.83	,369),
new Snack(10,'Ice cream ', 	3.8,	0.39	,196),
new Snack(11,'Pizza, from frozen',	3.3	,0.63,	252),
new Snack(12,'Popsicles and bars',  	1,	0.34	,80),
new Snack(13,'Potato chips',	1.1,	0.27	,169),
new Snack(14,'Pretzels',	1.5	,0.25,	168),
new Snack(15,'Pineapple, canned*',	4.4,	0.26	,75),
new Snack(16,'Pudding, ready-to-eat	',4.1	,0.38,	152),
new Snack(17,'Sweet potatoes, cooked*',	3.5,	0.33	,90),
new Snack(18,'Sandwich crackers',	1.3,	0.2,	183),
new Snack(19,'Toaster pastries	',2.7	,0.35	,299),
new Snack(20,'Tortilla chips	',1.2,	0.21,	161)
];

@Injectable()
export class SnackService {
  getSnacks() { return Observable.of(Snacks); }

  getSnack(id: number | string) {
    return this.getSnacks()
      // (+) before `id` turns the string into a number
      .map(snacks => snacks.find(snack => snack.id === +id));
  }
}
