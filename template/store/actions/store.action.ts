import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './admin-user-action.constants';

export class Store{{class_model.name.get_capitalized_camel()}}Action implements Action {
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.STORE_{{class_model.name.get_capitalized_snake()}}S;
    public payload: any;
}
