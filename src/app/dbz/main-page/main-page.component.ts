import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "Maestro Rochi",
    poder: 1000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.personajes.push(argumento);
  //   // console.log(argumento);
  // }
  
  constructor(){}


}