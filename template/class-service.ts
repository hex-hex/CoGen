import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class {{class_name}}Service extends BaseService implements OnInit {

constructor(public http: HttpClient) {
super('${entity}', http);
}

ngOnInit(): void {

}
}