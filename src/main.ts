import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FlightService } from './app/flight-search/flight.service';
import { DefaultFlightService } from './app/flight-search/default-flight.service';
import { BASE_URL } from './app/app.token';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // { provide: FlightService, useClass: DefaultFlightService }
    // { provide: BASE_URL, useValue: 'http://www.angular.at/api/' }
  ],
});
