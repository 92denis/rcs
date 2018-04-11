import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Repository } from './repository';
import 'rxjs/add/operator/map';

@Injectable()
export class RcsService {

  constructor(private http: HttpClient) { }

  getRepository(): Observable<Repository[]> {
    return this.http.get('https://api.github.com/users/Automattic/repos').map((data: Repository[]) => {
      return data;
    });
  }
}
