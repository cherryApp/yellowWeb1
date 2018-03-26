import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: number): string {
    let temp: string;
    temp = (value - 273.15).toFixed(0).toString();
    return temp + '°C';
  }

}