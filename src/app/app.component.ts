import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  nombre: string = "Miguel";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  a: number = 0.234;
  salario: number = 1234.5;
  
  persona: any = {
    nombre: "Miguel",
    apellido: "Fuentes",
    edad: 29,
    direccion: {
      calle: "Sotomayor",
      casa: "525",
    },
  }

  valorDePromesa: any = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llegó la info!"), 3500)
  })

  fecha: Date = new Date();
  nombre2: string = "jOrgE ANtoniO Perez domingueZ";
  activar: boolean = true;
  video: string = "JVYd-EEgOf8";

}
