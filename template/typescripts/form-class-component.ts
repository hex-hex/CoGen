import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {Location} from '@angular/common';

@Component({
selector: 'sa-{{class_model.name.get_kebab()}}-form',
templateUrl: './{{class_model.name.get_kebab()}}-form.component.html',
})
@AutoUnsubscribe()
export class {{class_model.name.get_capitalized_camel()}}FormComponent extends BaseComponent implements OnInit {
public loading: boolean;
public myForm: FormGroup;
public id: number;
public isEdit = false;
public subscription: Subscription;
public {{class_model.name.get_camel()}}: {{class_model.name.get_capitalized_camel()}}Model = new {{class_model.name.get_capitalized_camel()}}Model();

constructor(public formBuiler: FormBuilder,
public ref: ChangeDetectorRef,
public router: Router,
public location: Location,
public myNotifyService: MyNotifyService,
public {{class_model.name.get_camel()}}Service: {{class_model.name.get_capitalized_camel()}}Service,
public activedRoute: ActivatedRoute) {
super();
}

ngOnInit() {
    this.getRouteParemeter();
    this.getQueryParams();
    this.initFormControl();
}

initFormControl() {
    this.myForm = this.formBuiler.group({
        {% for member in class_model.member_list %}
        {{member.name.get_camel()}}: ['', [Validators.required]],
        {% endfor %}
    });
}

getRouteParemeter() {
    this.subscription = this.activedRoute
    .params
    .subscribe(params => {
    console.log(params);
    this.id = params['id'];
    if (this.id && this.id > 0) {
    this.isEdit = true;
    this.getItem();
    } else {
    this.isEdit = false;
    }
});
}

getQueryParams() {
this.subscription = this.activedRoute
.queryParams
.subscribe(params => {
});
}

getItem() {
this.loading = true;
this.{{class_model.name.get_camel()}}Service.get(this.id).subscribe((resp: any) => {
this.loading = false;
console.log(resp);
this.{{class_model.name.get_camel()}} = resp;
}, err => {
this.loading = false;
});
}

equals(r1: any, r2: any) {
if (r1 && r2) {
return r1.pk === r2.pk;
}
}

goBack() {
this.location.back();
}

onSubmit({value, valid}: { value: {{class_model.name.get_capitalized_camel()}}Model, valid: boolean }) {

if (!this.isEdit) {
this.{{class_model.name.get_camel()}}Service.add(value).subscribe((resp: any) => {
console.log(resp);
this.goBack();
}, err => {
console.log(err);
this.myNotifyService.notifyFail(err.error.error);
})
} else {
this.{{class_model.name.get_camel()}}Service.update(this.{{class_model.name.get_camel()}}.id, value).subscribe((resp: any) => {
console.log(resp);
this.myNotifyService.notifySuccess('The {{class_model.name.get_sentence()}} is successfully updated.');
this.goBack();
}, err => {
console.log(err);
this.myNotifyService.notifyFail(err.error.error);
})
}
}
}