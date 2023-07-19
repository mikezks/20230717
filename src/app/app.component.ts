import { Component, inject, OnInit } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigService } from './shared/config.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NextFlightsModule } from "./next-flights/next-flights.module";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      NextFlightsModule
    ]
})
export class AppComponent {
  title = 'Hello World!';

  configService = inject(ConfigService);

  constructor() {
    // TODO: In a later lab, we will assure that
    //  loading did happen _before_ we use the config!
    this.configService.loadConfig();
  }
}
