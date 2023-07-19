import { Injectable, inject } from '@angular/core';
import { Flight } from '../model/flight';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if (appConfig.useService === 'dummy') {
      return new DummyFlightService();
    }

    return new DefaultFlightService();
  }
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
