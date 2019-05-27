"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var operator_1 = require('rxjs/operator');
//Typescript custom enum for search types (optional)
(function (SearchType) {
    SearchType[SearchType["all"] = ''] = "all";
    SearchType[SearchType["movie"] = 'movie'] = "movie";
    SearchType[SearchType["series"] = 'series'] = "series";
    SearchType[SearchType["episodes"] = 'episodes'] = "episodes";
})(exports.SearchType || (exports.SearchType = {}));
var SearchType = exports.SearchType;
var MovieService = (function () {
    /**
     * Constructor of the service with dependency injection
     * @param http The standard angular httpClient, toi make the request
    */
    function MovieService(http) {
        this.http = http;
        this.url = 'https://www.omdbapi.com';
        this.apiKey = 'a3bbc72e';
    }
    /**
     * Get data from the omd API
     * map the result to return only the result that we need
     *
     * @param {string} title Search Term
     * @param {string} type movie, series, episodes or empty
     * @return Observable with the search result
    */
    MovieService.prototype.searchData = function (title, type) {
        var url = this.url + "?s=" + encodeURI(title) + "&type=" + type + "&apiKey=" + this.apiKey;
        console.log(url);
        return this.http.get(url)
            .pipe(operator_1.map(function (result) { return result['Search']; }));
    };
    MovieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
