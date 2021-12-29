import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["spiderman", "ironman", "hulk", "thor"];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    let heroeborrado:string = this.heroes.shift() || "";
    if (heroeborrado !== "") {
      this.heroesBorrados.push(heroeborrado);
    }
  }
}
