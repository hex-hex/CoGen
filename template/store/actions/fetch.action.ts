import {Action} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './{{class_model.name.get_camel()}}-action.constant';

export class Fetch{{class_model.name.get_capitalized_camel()}}Action implements Action {
    // readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.FETCH_ADMINUSERS;
    readonly type = {{class_model.name.get_capitalized_camel()}}ActionConstants.FETCH_{{class_model.name.get_capitalized_snake()}}S;

    constructor(public payload: { }) {
    }
}
