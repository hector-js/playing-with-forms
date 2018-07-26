import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class Filter implements PipeTransform {

  transform(items: any, element: any): any {
    if (!items || !element) {
      return items;
    }
    return items.filter(item => this.isMatched(item.value, element.value));
  }

  private isMatched(template: string, valueToCompare: string): boolean {
    return template.toLowerCase().indexOf(valueToCompare.toLowerCase()) !== -1;
  }

}
