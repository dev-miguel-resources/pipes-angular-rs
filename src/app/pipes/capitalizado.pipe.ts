import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true ): string {
      value = value.toLowerCase();

      let nombres = value.split(" ");

      if (todas) {
        for (let i in nombres) {
          // la primera palabra del i y la primera letra de esa palabra 0
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
        }
      } else {
        // para la primera posición o palabra con su primera letra
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
      }

      return nombres.join(" ");
  }
}
