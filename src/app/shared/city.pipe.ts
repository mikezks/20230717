import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  standalone: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, format?: 'long' | 'short'): string {
    let short = '';
    let long = '';

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        long = short = value;
    }

    return format === 'short' ? short : long;
  }
}
