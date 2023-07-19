import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable()
export class DummyFlightService implements FlightService {

  find(): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Madrid',
        to: 'New York',
        date: new Date().toISOString(),
        delayed: true
      }
    ])
  }
}
