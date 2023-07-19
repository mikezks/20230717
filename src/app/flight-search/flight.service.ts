import { Injectable, inject } from '@angular/core';
import { Flight } from '../model/flight';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  // useClass: DefaultFlightService,
  useClass: DummyFlightService
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
