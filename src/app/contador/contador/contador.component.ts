import {Component} from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent{
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
