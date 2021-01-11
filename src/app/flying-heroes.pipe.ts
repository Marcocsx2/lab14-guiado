import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]): any {
    return allHeroes.filter((hero: any) => hero.canfly);
  }
}

export interface Flyer {
  canFly: boolean;
}
