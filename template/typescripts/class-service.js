"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../../services/base.service");
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1 = __decorate([
        core_1.Injectable()
    ], default_1);
    return default_1;
}());
{
    class_model.name.get_capitalized_camel();
}
Service;
base_service_1.BaseService;
implements;
core_1.OnInit;
{
    constructor(public, http, http_1.HttpClient);
    {
        _this = _super.call(this, '{{class_model.name.get_kebab()}}', http) || this;
    }
    ngOnInit();
    void {};
}
