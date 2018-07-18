import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete',
  pure: false
})
export class AutocompletePipe implements PipeTransform {

  transform(cities: any, filter: any): any {
    if (!cities || !filter) {
      return cities;
    }
    return cities.filter(item => item.city.indexOf(filter.city.toLowerCase()) !== -1);
  }

}
