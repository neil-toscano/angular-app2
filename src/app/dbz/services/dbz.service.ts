import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
@Injectable()
export class DbzService{
    private _personajes:Personaje[]=[
        {
          nombre:"Goku",
          poder:15000
        },
        {
          nombre:"mayimbu",
          poder:18000
        },
        {
          nombre:"Krilin",
          poder:1200
        }
      ];
      get personajes():Personaje[]{
        return [...this._personajes];
      }
    constructor(){
        console.log('servicio inicializado');
        
    }
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}