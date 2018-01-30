import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './{{class_model.name.get_camel()}}-action.constant';

export class Delete{{class_model.name.get_capitalized_camel()}}Action implements Action {
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.DELETE_{{class_model.name.get_capitalized_snake()}};

    constructor(public payload: number) {
    }
}
