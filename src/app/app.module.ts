//modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }      from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


//services
import { PersonaService } from './services/personasList.service';
import { UsersService } from './services/users.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChangestateComponent } from './components/changestate/changestate.component';
import { PersonaComponent } from './components/personas/persona.component';
import { AddPersonaComponent } from './components/addPersona/addPersona.component';
import { HomeComponent } from './components/home/home.component';
import { DatospersonaleComponent } from './components/datospersonale/datospersonale.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangestateComponent,
    PersonaComponent,
    AddPersonaComponent,
    HomeComponent,
    DatospersonaleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PersonaService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
