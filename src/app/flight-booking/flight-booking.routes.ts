import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        data: {
          id: 999
        }
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      }
    ]
  }
];

export default FLIGHT_BOOKING_ROUTES;
