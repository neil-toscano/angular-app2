import { Component } from "@angular/core";
@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html'
})
export class ContadorComponet{
    title:string = 'Contador app2';
    edad:number=15;
    numero:number=0;
    base:number=5;
     sumar():void {
      this.numero=this.numero+this.base;
      
    }
    restar():void{
      this.numero=this.numero-this.base;
    }

}