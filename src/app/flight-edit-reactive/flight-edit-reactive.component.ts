import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css']
})
export class FlightEditReactiveComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  editForm = inject(FormBuilder).nonNullable.group({
    id: [0],
    from: ['London', [
      Validators.required,
      Validators.minLength(3)
    ]],
    to: ['Paris', [
      Validators.required,
      Validators.minLength(3)
    ]],
    date: [new Date().toISOString()]
  });

  constructor() {
    this.editForm.patchValue(this.data.flight);
  }

  save(): void {
    console.log(this.editForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
