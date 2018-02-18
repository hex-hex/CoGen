import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './admin-user-action.constants';
import {{{class_model.name.get_capitalized_camel()}}Model} from '../../{{class_model.name.get_camel()}}.model';

export class Set{{class_model.name.get_capitalized_camel()}}Action implements Action {
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S;

    constructor(public payload: {{class_model.name.get_capitalized_camel()}}Model[]) {
    }
}
