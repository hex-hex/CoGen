import {{{class_model.name.get_capitalized_camel()}}Model} from '../../{{class_model.name.get_camel()}}.model';
import {AppStateInterface} from '../../../../ngrx/app-store/app-state.interface';

export interface {{class_model.name.get_capitalized_camel()}}FeatureStateInterface extends AppStateInterface {
    {{class_model.name.get_camel()}}s: {{class_model.name.get_capitalized_camel()}}Model[];
}

