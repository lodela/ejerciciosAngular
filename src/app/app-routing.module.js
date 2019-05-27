"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var persona_component_1 = require('./components/personas/persona.component');
var addPersona_component_1 = require('./components/addPersona/addPersona.component');
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'personas', component: persona_component_1.PersonaComponent },
    { path: 'add', component: addPersona_component_1.AddPersonaComponent },
    { path: 'listaPersonas', component: persona_component_1.PersonaComponent },
    { path: 'movies', loadChildren: './components/movies/movies.module#MoviesPageModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
