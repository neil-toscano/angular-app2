import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','Hulk','Thor'];
  borrado:string='';
  primerBorrado:boolean=false;
  borrar():void{
   this.borrado=this.heroes.pop()|| '';
   this.primerBorrado=true;

    
  }

}
