import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';

@Injectable()
export class NextFlightsService {
  private date = new Date().toISOString();

  find(): Observable<Flight[]> {
    return of([
      { id: 7, from: 'Rome', to: 'Stockholm', date: this.date, delayed: false },
      { id: 8, from: 'Athens', to: 'London', date: this.date, delayed: false },
      { id: 9, from: 'Belgrade', to: 'Istanbul', date: this.date, delayed: false },
    ]);
  }
}
