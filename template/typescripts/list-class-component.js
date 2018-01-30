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
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1 = __decorate([
        core_1.Component({
            selector: 'sa-{{class_model.name.get_kebab()}}-list',
            templateUrl: './{{class_model.name.get_kebab()}}-list.component.html',
        })
    ], default_1);
    return default_1;
}());
{
    class_model.name.get_capitalized_camel();
}
ListComponent;
BaseComponent;
implements;
core_1.OnInit;
{
    searchForm: forms_1.FormGroup;
    searchCondition: string;
    loading: boolean;
    constructor(private, formBuilder, forms_1.FormBuilder, private, {}, { class_model: .name.get_camel() });
}
Service: {
    {
        class_model.name.get_capitalized_camel();
    }
}
Service,
    private;
helperService: HelperService;
{
    _this = _super.call(this) || this;
}
ngOnInit();
{
    this.refresh();
    this.buildSearchFrom();
    this.debounceSearchForm();
}
refresh();
{
    this.loading = true;
    this.;
    {
        {
            class_model.name.get_camel();
        }
    }
    Service.getAllByPaging(this.searchCondition, this.paging).subscribe(function (resp) {
        console.log(resp);
        _this.listElements = resp.content;
        _this.paging.totalSize = resp.totalElements;
        _this.loading = false;
    }, function (err) {
        _this.loading = false;
    });
}
/**
* ----- search form -----
*/
buildSearchFrom();
{
    this.searchForm = this.formBuilder.group({}, {} % );
    for (member in class_model.member_list % )
        ;
}
{
    {
        member.name.get_camel();
    }
}
[''],
    {} % endfor % ;
;
debounceSearchForm();
{
    this.searchCondition = '';
    this.searchForm.valueChanges.debounceTime(500).subscribe(function (form) {
        if (form) {
            _this.searchCondition = _this.helperService.generateQueryString(form);
        }
        _this.refresh();
    });
}
reset();
{
    this.searchForm.reset();
}
