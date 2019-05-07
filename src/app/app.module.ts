import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChangestateComponent } from './components/changestate/changestate.component';
import { PersonaComponent } from './components/personas/persona.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangestateComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
