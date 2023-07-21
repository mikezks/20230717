import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { initFlight } from '../model/flight';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  private dialog = inject(MatDialog);

  @Input() item = initFlight;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {}

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }
}
