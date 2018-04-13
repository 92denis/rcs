import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(repositories: any, value: string): any[] {
    if (!repositories) { return []; }
    if (!value) { return repositories; }
    return repositories.filter(repo => {
      return repo.language.toLowerCase().includes(value.toLowerCase());
    });
  }

}
