"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddPersonaComponent = (function () {
    function AddPersonaComponent() {
        this.enteredPersonaName = 'algo';
        this.datos = {
            personaName: ''
        };
        this.personCreated = new core_1.EventEmitter();
    }
    AddPersonaComponent.prototype.onAddPersona = function (data) {
        console.log(data.value);
        this.personCreated.emit(this.datos);
        this.datos.personaName = '';
        data.reset();
    };
    __decorate([
        core_1.Output()
    ], AddPersonaComponent.prototype, "personCreated");
    AddPersonaComponent = __decorate([
        core_1.Component({
            selector: 'app-addPersona',
            templateUrl: './addPersona.component.html',
            styleUrls: ['./addPersona.component.scss']
        })
    ], AddPersonaComponent);
    return AddPersonaComponent;
}());
exports.AddPersonaComponent = AddPersonaComponent;
