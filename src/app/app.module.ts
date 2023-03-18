import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { ContadorComponet } from './contador/contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.module';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
