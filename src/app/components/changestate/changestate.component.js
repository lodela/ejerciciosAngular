"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ColorState;
(function (ColorState) {
    ColorState[ColorState["on"] = 'green'] = "on";
    ColorState[ColorState["off"] = 'gray'] = "off";
})(ColorState || (ColorState = {}));
var ChangestateComponent = (function () {
    function ChangestateComponent() {
        this.colorState = ColorState.off;
        this.btnState = false;
    }
    ChangestateComponent.prototype.onChangeState = function () {
        console.clear();
        console.log('Initial colorState: ', this.colorState);
        var state = (this.colorState == ColorState.on) ? ColorState.off : ColorState.on;
        this.colorState = state;
        console.log('current colorState: ', this.colorState);
    };
    ChangestateComponent.prototype.ngOnInit = function () {
    };
    ChangestateComponent = __decorate([
        core_1.Component({
            selector: 'changeState',
            templateUrl: './changestate.component.html',
            styleUrls: ['./changestate.component.scss']
        })
    ], ChangestateComponent);
    return ChangestateComponent;
}());
exports.ChangestateComponent = ChangestateComponent;
