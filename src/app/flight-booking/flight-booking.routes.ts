import { Routes } from '@angular/router';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { TicketsEffects, ticketsFeature } from './+state';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideState(ticketsFeature),
      provideEffects(TicketsEffects)
    ],
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
      }
    ]
  }
];
