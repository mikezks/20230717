import { createFeature, createReducer, on } from "@ngrx/store";
import { ticketsActions } from './actions';
import { Flight } from "@flights42/ui-common";


export interface TicketsState {
  flights: Flight[];
  basket: unknown;
  tickets: unknown;
}

export const initialTicketsState: TicketsState = {
  flights: [],
  basket: {},
  tickets: {}
};


export const ticketsFeature = createFeature({
  name: 'tickets',
  reducer: createReducer(
    initialTicketsState,

    on(ticketsActions.flightsLoaded, (state, action) => ({
      ...state,
      flights: action.flights
    }))
  )
});
