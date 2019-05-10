"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ngEjerciciosGMF';
        this.personas = ['Juan', 'pedro', 'pablo', 'hugo', 'paco', 'luis', 'norberto'];
        this.distinct = function (value, index, self) {
            return self.indexOf(value) === index;
        };
    }
    AppComponent.prototype.onPersonCreated = function (datos) {
        var newPersona = datos.personaName;
        var personasCleanArr = this.personas;
        personasCleanArr.push(newPersona);
        personasCleanArr = personasCleanArr.filter(this.distinct);
        this.personas = personasCleanArr;
        console.log(personasCleanArr);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
