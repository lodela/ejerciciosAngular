import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PersonaComponent } from './components/personas/persona.component';
import { AddPersonaComponent } from './components/addPersona/addPersona.component';

const routes:Routes = [
    
    { path:'home',          component:HomeComponent},         // localhost:4200/home
    { path:'personas',      component:PersonaComponent },
    { path:'add',           component: AddPersonaComponent },
    { path:'listaPersonas', component:PersonaComponent},
    { path: 'movies',       loadChildren: './components/movies/movies.module#MoviesPageModule'},
    { path:'',              redirectTo: 'home', pathMatch:'full'},         //localhost:4200
    { path:'**',            redirectTo: 'home', pathMatch:'full'}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
