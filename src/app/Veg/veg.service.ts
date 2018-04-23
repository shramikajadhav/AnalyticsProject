import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Veg {
  constructor(public id: number, public name: string, public portion : number, public price : number, public calories : number) { }
}

const Veggies = [
  new Veg(1, "Celery*"	,2.1	,0.16,	10),
  new Veg(2, 'Broccoli florets*',	1.6,	0.18	,12),
  new Veg(3, 'Tomatoes grape/cherry*	',3.2,	0.55,	16),
new Veg(4,'Carrots, baby*',	2.3,	0.19,	22),
new Veg(5,'Red peppers*'	,2.6,	0.6,	23),
new Veg(6,'Strawberries*'	,2.9	,0.41,	27),
new Veg(7,'Cantaloupe	',3.5,	0.38	,33),
new Veg(8,'Plum*	',2.9,	0.25,	38),
new Veg(9,'Oranges, navel',	3.8	,0.2	,53),
new Veg(10,'Grapes', 	3	,0.32	,59),
new Veg(11,'Peaches, canned*',	4.4	,0.31	,68),
new Veg(12,'Fruit cocktail, canned*',	4.4	,0.31,	71),
new Veg(13,'Tangerines',	4.8,	0.51	,72),
new Veg(14,'Watermelon', 	8.7,	0.25	,74),
new Veg(15,'Pineapple, canned*',	4.4,	0.26	,75),
new Veg(16,'Apples',	5.2	,0.36	,77),
new Veg(17,'Sweet potatoes, cooked*',	3.5,	0.33	,90),
new Veg(18,'Applesauce, jarred	',4.6,	0.22	,100),
new Veg(19,'Bananas	',4.1,	0.18	,102),
new Veg(20,'Raisins*',	1.3	,0.19	,109)
];

@Injectable()
export class VegService {
  getVeggies() { return Observable.of(Veggies); }

  getVeg(id: number | string) {
    return this.getVeggies()
      // (+) before `id` turns the string into a number
      .map(veggies => veggies.find(veg => veg.id === +id));
  }
}
