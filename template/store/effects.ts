import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {{{class_model.name.get_capitalized_camel()}}ActionConstants} from './actions/{{class_model.name.get_camel()}}-action.constant';
import {Fetch{{class_model.name.get_capitalized_camel()}}Action} from './actions/fetch-{{class_model.name.get_camel()}}.action';
import {{{class_model.name.get_capitalized_camel()}}Service} from '../{{class_model.name.get_camel()}}.service';
import {{{class_model.name.get_capitalized_camel()}}FeatureStateInterface} from './interfaces/feature-state.interface';


@Injectable()
export class {{class_model.name.get_capitalized_camel()}}Effects {
    @Effect()
    {{class_model.name.get_camel()}}Fetch = this.actions$
        .ofType({{class_model.name.get_capitalized_camel()}}ActionConstants.FETCH_{{class_model.name.get_capitalized_snake()}}S)
        .switchMap((action: Fetch{{class_model.name.get_capitalized_camel()}}Action) => {

            console.log('{{class_model.name.get_capitalized_camel()}}Actions.FETCH_{{class_model.name.get_capitalized_snake()}}S');
            return this.{{class_model.name.get_camel()}}Service.getAll();
        })
        .map(
            ({{class_model.name.get_camel()}}s) => ({
                // type: {{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S,
                type: {{class_model.name.get_capitalized_camel()}}ActionConstants.SET_{{class_model.name.get_capitalized_snake()}}S,
                payload: {{class_model.name.get_camel()}}s
            }));
    //
    // @Effect({dispatch: false})
    // {{class_model.name.get_camel()}}Store = this.actions$
    //     .ofType({{class_model.name.get_capitalized_camel()}}ActionConstants.STORE_{{class_model.name.get_capitalized_snake()}}S)
    //     .withLatestFrom(this.store.select('{{class_model.name.get_camel()}}s'))
    //     .switchMap(([action, state]) => {
    //         const req = new HttpRequest('PUT', 'https://ng-{{class_model.name.get_camel()}}-book-3adbb.firebaseio.com/{{class_model.name.get_camel()}}s.json', state.{{class_model.name.get_camel()}}s, {reportProgress: true});
    //         return this.httpClient.request(req);
    //     });

    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private {{class_model.name.get_camel()}}Service: {{class_model.name.get_capitalized_camel()}}Service,
                private store: Store<{{class_model.name.get_capitalized_camel()}}FeatureStateInterface>) {
    }

}
