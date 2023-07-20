import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FlightService } from "../flight-search/flight.service";
import { ticketsActions } from "./actions";
import { map, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketsEffects {
  private actions = inject(Actions);
  private flightService = inject(FlightService);

  loadFlights = createEffect(
    () => this.actions.pipe(
      ofType(ticketsActions.flightsLoad),
      switchMap(action => this.flightService.find(action.from, action.to)),
      map(flights => ticketsActions.flightsLoaded({ flights }))
    )
  );
}
