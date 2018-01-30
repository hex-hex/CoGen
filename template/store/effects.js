"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/withLatestFrom");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
{
    class_model.name.get_capitalized_camel();
}
ActionConstants;
from;
'./actions/{{class_model.name.get_camel()}}-action.constant';
var module_1 = require();
{
    class_model.name.get_capitalized_camel();
}
Action;
from;
'./actions/fetch-{{class_model.name.get_camel()}}.action';
{
    class_model.name.get_capitalized_camel();
}
Service;
from;
'../{{class_model.name.get_camel()}}.service';
{
    class_model.name.get_capitalized_camel();
}
FeatureStateInterface;
from;
'./interfaces/feature-state.interface';
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
Effects;
{
    {
        {
            class_model.name.get_camel();
        }
    }
    module_1.Fetch = this.actions$
        .ofType({}, { class_model: .name.get_capitalized_camel() });
}
ActionConstants.FETCH_;
{
    {
        class_model.name.get_capitalized_snake();
    }
}
S;
switchMap(function (action, _a, _b, Action) {
    var class_model = _b.class_model, name = _b.name, _c = _b.get_capitalized_camel, get_capitalized_camel = _c === void 0 ? () : _c;
    console.log('{{class_model.name.get_capitalized_camel()}}Actions.FETCH_{{class_model.name.get_capitalized_snake()}}S');
    return _this.;
    {
        {
            class_model.name.get_camel();
        }
    }
    Service.getAll();
})
    .map(function (_a, _b, s) {
    var class_model = _b.class_model, name = _b.name, _c = _b.get_camel, get_camel = _c === void 0 ? () : _c;
    return ({
        // type: {{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S,
        type: {}
    });
}, { class_model: .name.get_capitalized_camel() }, ActionConstants.SET_, {}, { class_model: .name.get_capitalized_snake() }, S, payload, {}, { class_model: .name.get_camel() }, s);
;
//
// @Effect({dispatch: false})
// {{class_model.name.get_camel()}}Store = this.actions$
//     .ofType({{class_model.name.get_capitalized_camel()}}ActionConstants.STORE_{{class_model.name.get_capitalized_snake()}}S)
//     .withLatestFrom(this.store.select('{{class_model.name.get_camel()}}s'))
//     .switchMap(([action, state]) => {
//         const req = new HttpRequest('PUT', 'https://ng-{{class_model.name.get_camel()}}-book-3adbb.firebaseio.com/{{class_model.name.get_camel()}}s.json', state.{{class_model.name.get_camel()}}s, {reportProgress: true});
//         return this.httpClient.request(req);
//     });
constructor(private, actions$, effects_1.Actions, private, httpClient, http_1.HttpClient, private, {}, { class_model: .name.get_camel() }, Service, {}, { class_model: .name.get_capitalized_camel() }, Service, private, store, store_1.Store < {}, { class_model: .name.get_capitalized_camel() }, FeatureStateInterface > );
{
}
