import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { ticketsFeature } from "./reducer";
import { TicketsEffects } from "./effects";

export function provideTicketsFeature(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(ticketsFeature),
    provideEffects(TicketsEffects)
  ]);
}
