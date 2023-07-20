
import { createActionGroup, props } from "@ngrx/store";
import { Flight } from './../../model/flight';

export const ticketsActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights load': props<{ from: string; to: string; }>(),
    'flights loaded': props<{ flights: Flight[] }>()
  }
});
