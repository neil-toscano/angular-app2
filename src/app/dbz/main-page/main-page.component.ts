import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  nuevo:Personaje={
    nombre:"Freezer",
    poder:18000

  }
  
  // public get personajes() : Personaje[] {
  //   return  this.dbz.personajes; 
  // }
  
  
  // agregar(event:any):void{
  //   //event.preventDefault();
  //   if(this.nuevo.nombre.trim().length==0){
  //     return;
  //   }
  //   this.personajes.push(event);
  
      
    
    
    
  //   console.log("hey");
    
    
  // }

  constructor(private dbz:DbzService){
    

  }

}
