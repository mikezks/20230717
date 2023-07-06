import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { provideHttpClient } from '@angular/common/http';
import { FlightService } from './flight.service';
import { of } from 'rxjs';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        /* {
          provide: FlightService,
          useValue: {
            find: () => of([])
          }
        } */
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have undefined selected flights initially', () => {
    expect(component.selectedFlight).toBeUndefined();
  });
});
