import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  Subject,
  tap,
  toArray,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObserverserviceService {
  url = 'https://opentdb.com/api.php?amount=10';
  constructor(private http: HttpClient) {}
  getHeroes() {
    return this.http.get(this.url).pipe(map((arr) => arr['results']));
  }
}
