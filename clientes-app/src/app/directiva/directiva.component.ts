import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'PHP', 'Java SE', 'C#'];

  tituloBoton = 'Ocultar';
  habilitar = true;

  constructor() { }

  cambiar(): void {
    this.habilitar = !this.habilitar;
    this.tituloBoton = this.habilitar ? 'Ocultar' : 'Mostrar';
  }

}
