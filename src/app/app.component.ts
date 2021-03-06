import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador APP';
  numero: number = 10;
  base: number = 5;


  acumular(valor: string) {
    switch (valor) {
      case "sumar":
        this.numero += this.base;
        break;
      case "restar":
        this.numero -= this.base;
        break;
    }
  }

}
