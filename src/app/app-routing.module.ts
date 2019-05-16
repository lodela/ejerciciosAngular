import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PersonaComponent } from './components/personas/persona.component';
import { AddPersonaComponent } from './components/addPersona/addPersona.component';

const routes:Routes = [
    { path:'',              component:HomeComponent},
    { path:'home',          component:HomeComponent},
    { path:'personas',      component:PersonaComponent },
    { path:'add',           component: AddPersonaComponent },
    { path:'listaPersonas', component:PersonaComponent},
    { path:'**',            redirectTo: 'home'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
