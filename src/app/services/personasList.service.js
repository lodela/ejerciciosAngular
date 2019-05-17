"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PersonaService = (function () {
    function PersonaService() {
        this.personas = ['Pedro PicaPiedra', 'Pablo Marmol', 'hugo', 'paco', 'luis'];
    }
    PersonaService.prototype.onAddPerson = function (name) {
        console.log('se activó el servicio');
        console.log(name);
        this.personas.push(name);
        console.log(this.personas);
    };
    PersonaService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], PersonaService);
    return PersonaService;
}());
exports.PersonaService = PersonaService;
