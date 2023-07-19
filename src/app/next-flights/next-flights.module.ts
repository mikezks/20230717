import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { NextFlightsService } from './next-flights.service';
import { CheckinComponent } from './checkin/checkin.component';


@NgModule({
  declarations: [
    NextFlightsComponent
  ],
  imports: [
    CommonModule,
    CheckinComponent
  ],
  providers: [
    NextFlightsService
  ],
  exports: [
    NextFlightsComponent
  ]
})
export class NextFlightsModule { }
