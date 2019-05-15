import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaComponent } from './components/personas/persona.component';
import { AddPersonaComponent } from './components/addPersona/addPersona.component';

const routes:Routes = [
    { path:'', component:PersonaComponent },
    { path:'add', component: AddPersonaComponent },
    { path: 'listaPersonas', component:PersonaComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
