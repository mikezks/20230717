import { Store } from '@ngrx/store';
import { inject } from "@angular/core"
import { ticketsFeature } from './reducer';
import { ticketsActions } from './actions';

export function injectTicketsFeature() {
  const store = inject(Store);

  return {
    flights$: store.select(ticketsFeature.selectFlights),
    search: (from: string, to: string) => store.dispatch(
      ticketsActions.flightsLoad({ from, to })
    )
  };
}
