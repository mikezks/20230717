import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ticketsActions, ticketsFeature } from '../+state';
import { CityPipe } from '../../shared/city.pipe';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  private store = inject(Store);

  from = 'London';
  to = 'Paris';
  flights$ = this.store.select(ticketsFeature.selectFlights);
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(): void {
    this.store.dispatch(
      ticketsActions.flightsLoad({
        from: this.from,
        to: this.to
      })
    );
  }
}
