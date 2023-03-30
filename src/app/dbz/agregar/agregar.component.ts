import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() item1:Personaje={
    nombre:'',
poder:0};
  // @Output() newItemEvent = new EventEmitter<Personaje>();

  agregarHeroe(value: string) {
    // this.newItemEvent.emit(this.item1);
    this.dbz.agregarPersonaje(this.item1);
    
    this.item1={
      nombre:'',
      poder:0
    }
  }
  constructor(private dbz:DbzService){

  }
  
 
  cambiarNombre(event:any):void{
    console.log(event.target.value);
    

  }
 
}
