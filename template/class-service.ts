import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class {{class_model.name.get_capitalized_camel()}}Service extends BaseService implements OnInit {

    constructor(public http: HttpClient) {
        super('{{class_model.name.get_camel()}}', http);
    }

    ngOnInit(): void {
    }
}