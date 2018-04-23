import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title"></h1>
    <nav>
      <a routerLink="/snacks" routerLinkActive="active">Snacks</a>
       <a routerLink="/veggies" routerLinkActive="active">Vegetables</a>
      
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
