import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const validCities = [
    'Graz', 'London', 'Paris'
  ];

  if (control?.value && !validCities.includes(control.value)) {
    return {
      city: {
        actualValue: control.value,
        validCities
      }
    };
  }

  return null;
}

export function validateCityWithParams(validCities: string[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value && !validCities.includes(control.value)) {
      return {
        city: {
          actualValue: control.value,
          validCities
        }
      };
    }

    return null;
  }
}
