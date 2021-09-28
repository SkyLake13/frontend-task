import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  public transform(options: string[] | null, filterBy: string): string[] | null {
    if(options && filterBy && filterBy !== '') {
      return options.filter(opt => opt.toLowerCase().includes(filterBy.toLowerCase()));
    }

    return options;
  }
}
