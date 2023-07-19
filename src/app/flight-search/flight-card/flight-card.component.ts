import { Flight, initialFlight } from './../../model/flight';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  // @Input() item: Flight = initialFlight;
  @Input({ required: true }) item!: Flight;
  @Input() selected = false;

  toggleSelection(): void {
    this.selected = !this.selected;
  }
}
