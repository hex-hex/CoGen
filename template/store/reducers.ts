import {Ingredient} from '../../shared/ingredient.model';
import {{{class_model.name.get_capitalized_camel()}}Actions} from 'app/dbc-pages/{{class_model.name.get_camel()}}/store/actions/{{class_model.name.get_camel()}}.actions';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './actions/{{class_model.name.get_camel()}}-action.constant';
import {{{class_model.name.get_capitalized_camel()}}InitialStateConstant} from './{{class_model.name.get_camel()}}-initial-state.constant';


export function {{class_model.name.get_camel()}}sReducer(state = {{class_model.name.get_capitalized_camel()}}InitialStateConstant, action: {{class_model.name.get_capitalized_camel()}}Actions) {
    switch (action.type) {
        case ({{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S):
            console.log('{{class_model.name.get_capitalized_camel()}}Actions.SET_{{class_model.name.get_capitalized_snake()}}S');
            return {
                ...state,
                {{class_model.name.get_camel()}}s: [...action.payload]
            };
        // case ({{class_model.name.get_capitalized_camel()}}ActionConstants.ADD_{{class_model.name.get_capitalized_snake()}}):
        //     return {
        //         ...state,
        //         {{class_model.name.get_camel()}}s: [...state.{{class_model.name.get_camel()}}s, action.payload]
        //     };
        case ({{class_model.name.get_capitalized_camel()}}ActionConstants.UPDATE_{{class_model.name.get_capitalized_snake()}}):
            const {{class_model.name.get_camel()}} = state.{{class_model.name.get_camel()}}s[action.payload.index];
            const updated{{class_model.name.get_capitalized_camel()}} = {
                ...{{class_model.name.get_camel()}},
                ...action.payload.updated{{class_model.name.get_capitalized_camel()}}
            };
            const {{class_model.name.get_camel()}}s = [...state.{{class_model.name.get_camel()}}s];
            {{class_model.name.get_camel()}}s[action.payload.index] = updated{{class_model.name.get_capitalized_camel()}};
            return {
                ...state,
                {{class_model.name.get_camel()}}s: {{class_model.name.get_camel()}}s
            };
        case ({{class_model.name.get_capitalized_camel()}}ActionConstants.DELETE_{{class_model.name.get_capitalized_snake()}}):
            const old{{class_model.name.get_capitalized_camel()}}s = [...state.{{class_model.name.get_camel()}}s];
            old{{class_model.name.get_capitalized_camel()}}s.splice(action.payload, 1);
            return {
                ...state,
                {{class_model.name.get_camel()}}s: old{{class_model.name.get_capitalized_camel()}}s
            };
        default:
            return state;
    }
}
