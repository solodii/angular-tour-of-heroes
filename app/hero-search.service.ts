import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  private heroesUrl = 'app/heroes';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: Http
  ) {}

  search(term: string): Observable<Hero[]> {
    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http
      .get(url, { headers: this.headers })
      .map((r: Response) => r.json().data as Hero[]);
  }
}
