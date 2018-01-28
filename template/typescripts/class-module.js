"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var smartadmin_datatable_module_1 = require("../../shared/ui/datatable/smartadmin-datatable.module");
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var common_1 = require("@angular/common");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../../theme/shared/shared.module");
var ngx_pagination_1 = require("ngx-pagination");
var ngx_loading_1 = require("ngx-loading");
var angular_confirmation_popover_1 = require("angular-confirmation-popover");
exports.routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: {} }, { class_model: .name.get_capitalized_camel() }
];
ListComponent, pathMatch;
'full';
{
    path: 'add', component;
    {
        {
            class_model.name.get_capitalized_camel();
        }
    }
    FormComponent, pathMatch;
    'full';
}
{
    path: 'edit/:id', component;
    {
        {
            class_model.name.get_capitalized_camel();
        }
    }
    FormComponent, pathMatch;
    'full';
}
;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1 = __decorate([
        core_1.NgModule({
            declarations: [
                {}, { class_model: .name.get_capitalized_camel() }
            ]
        }, ListComponent, {}, { class_model: .name.get_capitalized_camel() }, FormComponent, , imports, [
            smartadmin_module_1.SmartadminModule,
            smartadmin_datatable_module_1.SmartadminDatatableModule,
            router_1.RouterModule.forChild(exports.routes),
            common_1.CommonModule,
            smartadmin_input_module_1.SmartadminInputModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            ngx_pagination_1.NgxPaginationModule,
            ngx_loading_1.LoadingModule,
            angular_confirmation_popover_1.ConfirmationPopoverModule
        ])
    ], default_1);
    return default_1;
}());
{
    class_model.name.get_capitalized_camel();
}
Module;
{
}
