import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FlightSearchComponent } from './flight-search.component';
import { provideHttpClient } from '@angular/common/http';
import { FlightService } from './flight.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: FlightService,
          useValue: {
            find: () => of([
              { id: 999, from: '', to: '', date: '', delayed: false }
            ])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setInput(selector: string, value: string): void {
    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should hava a disabled search bitton w/o params', fakeAsync(async () => {
    tick();
    // Set values
    setInput('input[name=from]', '');
    setInput('input[name=to]', '');

    // Trigger change detection
    fixture.detectChanges();

    const disabled = fixture.debugElement.query(By.css('button')).nativeElement.disabled;

    expect(disabled).toBeTruthy();
  }));
});
