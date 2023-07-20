import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { injectTicketsFeature } from '../+state';
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
  protected ticketsFeature = injectTicketsFeature();

  from = 'London';
  to = 'Paris';
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };
}
