import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
