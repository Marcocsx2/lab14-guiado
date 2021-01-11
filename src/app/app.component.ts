import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Héroes que vuelan';

  constructor() {
    this.reset();
  }

  addHero(name: string): any {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = { name, canFly: this.canFly };
    this.heroes = this.heroes.concat(hero);
  }

  reset(): any {
    this.heroes = [];
  }
}
