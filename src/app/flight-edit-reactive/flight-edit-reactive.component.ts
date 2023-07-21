import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../model/flight';
import { validateCity, validateCityWithParams } from '../shared/validation/city-validator';
import { debounceTime } from 'rxjs';

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
      Validators.minLength(3),
      validateCity
    ]],
    to: ['Bukarest', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'Wien', 'Bukarest', 'Mumbai'
      ])
    ]],
    date: [new Date().toISOString()]
  }, { updateOn: 'blur' });

  constructor() {
    this.editForm.patchValue(this.data.flight);

    this.editForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  close(): void {
    this.dialogRef.close();
  }
}
