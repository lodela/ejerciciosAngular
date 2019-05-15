import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//services
import { PersonaService } from './services/personasList.service';

// components
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
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
