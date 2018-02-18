import {Add{{class_model.name.get_capitalized_camel()}}Action} from './add-{{class_model.name.get_camel()}}.action';
import {Delete{{class_model.name.get_capitalized_camel()}}Action} from './delete-{{class_model.name.get_camel()}}.action';
import {Fetch{{class_model.name.get_capitalized_camel()}}Action} from './fetch-{{class_model.name.get_camel()}}.action';
import {Set{{class_model.name.get_capitalized_camel()}}Action} from './set-{{class_model.name.get_camel()}}.action';
import {Update{{class_model.name.get_capitalized_camel()}}Action} from './update-{{class_model.name.get_camel()}}.action';
import {Store{{class_model.name.get_capitalized_camel()}}Action} from './store-{{class_model.name.get_camel()}}.action';

export type {{class_model.name.get_capitalized_camel()}}Actions = Set{{class_model.name.get_capitalized_camel()}}Action |
    Add{{class_model.name.get_capitalized_camel()}}Action |
    Update{{class_model.name.get_capitalized_camel()}}Action |
    Delete{{class_model.name.get_capitalized_camel()}}Action |
    Store{{class_model.name.get_capitalized_camel()}}Action |
    Fetch{{class_model.name.get_capitalized_camel()}}Action;
