import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './admin-user-action.constants';
import {{{class_model.name.get_capitalized_camel()}}Model} from '../../{{class_model.name.get_camel()}}.model';

export class Update{{class_model.name.get_capitalized_camel()}}Action implements Action {
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.UPDATE_{{class_model.name.get_capitalized_snake()}};

    constructor(public payload: { index: number, updated{{class_model.name.get_capitalized_camel()}}: {{class_model.name.get_capitalized_camel()}}Model }) {
    }
}
