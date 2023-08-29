import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Recipes',
        routerLink: '/recipes',
      },
      {
        label: 'Mealplan',
        routerLink: '/mealplan',
      },
    ];
  }
}
