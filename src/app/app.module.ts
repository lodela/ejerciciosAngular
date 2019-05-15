import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChangestateComponent } from './components/changestate/changestate.component';
import { PersonaComponent } from './components/personas/persona.component';
import { AddPersonaComponent } from './components/addPersona/addPersona.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangestateComponent,
    PersonaComponent,
    AddPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
