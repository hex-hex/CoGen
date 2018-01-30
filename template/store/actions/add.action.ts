import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}Model} from '../../{{class_model.name.get_camel()}}.model';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './{{class_model.name.get_camel()}}-action.constant';

export class Add{{class_model.name.get_capitalized_camel()}}Action implements Action {
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S;

    constructor(public payload: {{class_model.name.get_capitalized_camel()}}Model[]) {
    }
}
