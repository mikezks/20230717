import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {
  from = 'London';
  to = 'Paris';
  flights: Array<Flight> = [];
  selectedFlight: Flight | undefined;
  message = '';

  names = [
    'Joe', 'Mary', 'Peter', 'Zoe'
  ];

  copyOfNames = [ ...this.names ];

  myFlight = {
    id: 333,
    from: 'Bukarest',
    to: 'Budapest',
    date: '',
    delayed: false,
    passengers: [
      {
        id: 1,
        firstname: 'Mary',
        lastname: 'Doe'
      }
    ]
  };

  anotherFlight = {
    ...this.myFlight,
    id: 555,
    passengers: []
  };

  private flightService = inject(FlightService);

  search(...names: string[]): void {
    // Reset properties
    this.message = '';
    this.selectedFlight = undefined;

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;

    this.search('Mary', 'Peter')
  }
}
