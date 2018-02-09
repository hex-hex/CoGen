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
var forms_1 = require("@angular/forms");
var Subscription_1 = require("rxjs/Subscription");
var router_1 = require("@angular/router");
var ngx_auto_unsubscribe_1 = require("ngx-auto-unsubscribe");
var common_1 = require("@angular/common");
var base_component_1 = require("../../../theme/shared/base-component/base.component");
{
    class_model.name.get_capitalized_camel();
}
Model;
from;
'../{{class_model.name.get_kebab()}}.model';
var my_notify_service_1 = require("../../../services/my-notify.service");
{
    class_model.name.get_capitalized_camel();
}
Service;
from;
'../{{class_model.name.get_kebab()}}.service';
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1 = __decorate([
        core_1.Component({
            selector: 'sa-{{class_model.name.get_kebab()}}-form',
            templateUrl: './{{class_model.name.get_kebab()}}-form.component.html',
        }),
        ngx_auto_unsubscribe_1.AutoUnsubscribe()
    ], default_1);
    return default_1;
}());
{
    class_model.name.get_capitalized_camel();
}
FormComponent;
base_component_1.BaseComponent;
implements;
core_1.OnInit;
{
    loading: boolean;
    myForm: forms_1.FormGroup;
    id: number;
    isEdit = false;
    subscription: Subscription_1.Subscription;
    public;
    {
        {
            class_model.name.get_camel();
        }
    }
    {
        {
            class_model.name.get_capitalized_camel();
        }
    }
    Model = new {};
    {
        class_model.name.get_capitalized_camel();
    }
}
Model();
constructor(public, formBuiler, forms_1.FormBuilder, public, ref, core_1.ChangeDetectorRef, public, router, router_1.Router, public, location, common_1.Location, public, myNotifyService, my_notify_service_1.MyNotifyService, public, {}, { class_model: .name.get_camel() }, Service, {}, { class_model: .name.get_capitalized_camel() }, Service, public, activatedRoute, router_1.ActivatedRoute);
{
    _this = _super.call(this, activatedRoute, location) || this;
}
ngOnInit();
{
    this.getRouteParemeter();
    this.getQueryParams();
    this.initFormControl();
}
initFormControl();
{
    this.myForm = this.formBuiler.group({}, {} % );
    for (member in class_model.member_list % )
        ;
}
{
    {
        member.name.get_camel();
    }
}
['', [forms_1.Validators.required]],
    {} % endfor % ;
;
getRouteParemeter();
{
    this.subscription = this.activatedRoute
        .params
        .subscribe(function (params) {
        console.log(params);
        _this.id = params['id'];
        if (_this.id && _this.id > 0) {
            _this.isEdit = true;
            _this.getItem();
        }
        else {
            _this.isEdit = false;
        }
    });
}
getQueryParams();
{
    this.subscription = this.activatedRoute
        .queryParams
        .subscribe(function (params) {
    });
}
getItem();
{
    this.loading = true;
    this.;
    {
        {
            class_model.name.get_camel();
        }
    }
    Service.get(this.id).subscribe(function (resp) {
        _this.loading = false;
        console.log(resp);
        _this.;
        {
            {
                class_model.name.get_camel();
            }
        }
        resp;
    }, function (err) {
        _this.loading = false;
    });
}
equals(r1, any, r2, any);
{
    if (r1 && r2) {
        return r1.pk === r2.pk;
    }
}
goBack();
{
    this.location.back();
}
onSubmit({ value: value, valid: valid }, { value: {} }, { class_model: .name.get_capitalized_camel() }, Model, valid, boolean);
{
    if (!this.isEdit) {
        this.;
        {
            {
                class_model.name.get_camel();
            }
        }
        Service.add(value).subscribe(function (resp) {
            console.log(resp);
            _this.goBack();
        }, function (err) {
            console.log(err);
            _this.myNotifyService.notifyFail(err.error.error);
        });
    }
    else {
        this.;
        {
            {
                class_model.name.get_camel();
            }
        }
        Service.update(this., {}, { class_model: .name.get_camel() });
    }
    pk, value;
    subscribe(function (resp) {
        console.log(resp);
        _this.myNotifyService.notifySuccess('The {{class_model.name.get_sentence()}} is successfully updated.');
        _this.goBack();
    }, function (err) {
        console.log(err);
        _this.myNotifyService.notifyFail(err.error.error);
    });
}
