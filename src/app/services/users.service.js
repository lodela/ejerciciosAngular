"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url + "/users")
            .toPromise()
            .then(function (res) { return res; })
            .then(function (res) { return res; })
            .catch(this.ocurrioUnError);
    };
    UsersService.prototype.getPersonalData = function (id) {
        console.log(id);
        return this.http.get(this.url + "/users/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .then(function (res) { return res; })
            .catch(this.ocurrioUnError);
    };
    UsersService.prototype.ocurrioUnError = function (error) {
        console.log('ocurrio un error en el servicio', error);
        return Promise.reject(error.message || error);
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
