import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
    selector: 'sa-{{class_model.name.get_kebab()}}-list',
    templateUrl: './{{class_model.name.get_kebab()}}-list.component.html',
})
export class {{class_model.name.get_capitalized_camel()}}ListComponent extends BaseComponent implements OnInit {
public searchForm: FormGroup;
public searchCondition: string;
public loading: boolean;

constructor(private formBuilder: FormBuilder,
private {{class_model.name.get_camel()}}Service: {{class_model.name.get_capitalized_camel()}}Service,
private helperService: HelperService) {
super();
}

ngOnInit() {
this.refresh();
this.buildSearchFrom();
this.debounceSearchForm();
}

refresh() {
this.loading = true;
this.{{class_model.name.get_camel()}}Service.getAllByPaging(this.searchCondition, this.paging).subscribe((resp: any) => {
console.log(resp);
this.listElements = resp.content;
this.paging.totalSize = resp.totalElements;
this.loading = false;
}, err => {
this.loading = false;
});
}

/**
* ----- search form -----
*/
buildSearchFrom() {
this.searchForm = this.formBuilder.group({
        {% for member in class_model.member_list %}
        {{member.name.get_camel()}}: [''],
        {% endfor %}
});
}

debounceSearchForm() {
this.searchCondition = '';
this.searchForm.valueChanges.debounceTime(500).subscribe((form: any) => {
if (form) {
this.searchCondition = this.helperService.generateQueryString(form);
}
this.refresh();
});
}

reset() {
this.searchForm.reset();
}
}