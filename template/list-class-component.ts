import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
selector: 'sa-${entity}-list',
templateUrl: './${entity}-list.component.html',

})
export class ${entity}ListComponent extends BaseComponent implements OnInit {
public searchForm: FormGroup;
public searchCondition: string;
public loading: boolean;

constructor(private formBuilder: FormBuilder,
private ${entity}Service: ${entity}Service,
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
this.${entity}Service.getAllByPaging(this.searchCondition, this.paging).subscribe((resp: any) => {
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
<#list fields as f>
${f.name}: [''],
</#list>
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