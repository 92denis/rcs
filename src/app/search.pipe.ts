import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(repositories, value): any {
    return repositories.filter(repo => {
      return repo.language.toLowerCase().includes(value.toLowerCase());
    });
  }

}
