
import { Flight } from "@flights42/ui-common";
import { createActionGroup, props } from "@ngrx/store";

export const ticketsActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights load': props<{ from: string; to: string; }>(),
    'flights loaded': props<{ flights: Flight[] }>()
  }
});
