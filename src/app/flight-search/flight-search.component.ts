import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  private http = inject(HttpClient);

  from = 'London';
  to = 'Paris';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<Flight[]>(url, { params, headers })
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = this.selectedFlight === flight ? undefined : flight;
  }
}
