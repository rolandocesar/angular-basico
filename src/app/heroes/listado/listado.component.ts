import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[]=['Spiderman', 'Iromen', 'Hulk', 'Thor', 'Capitán América'];

    heroeBorrado:string = '';

    borrarHeroe(){
      this.heroeBorrado=this.heroes.pop() || '';
    }

}
