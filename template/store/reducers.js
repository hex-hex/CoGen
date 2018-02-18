"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
{
    class_model.name.get_capitalized_camel();
}
Actions;
from;
'app/dbc-pages/{{class_model.name.get_camel()}}/store/actions/{{class_model.name.get_camel()}}.actions';
{
    class_model.name.get_capitalized_camel();
}
ActionConstants;
from;
'./actions/{{class_model.name.get_camel()}}-action.constant';
{
    class_model.name.get_capitalized_camel();
}
InitialStateConstant;
from;
'./{{class_model.name.get_camel()}}-initial-state.constant';
function () { {
    class_model.name.get_camel();
} }
exports. = ;
sReducer(state = {}, { class_model: .name.get_capitalized_camel() }, InitialStateConstant, action, {}, { class_model: .name.get_capitalized_camel() }, Actions);
{
    switch (action.type) {
        case ({}): {
            class_model.name.get_capitalized_camel();
        }
    }
    ActionConstants.SET_;
    {
        {
            class_model.name.get_capitalized_snake();
        }
    }
    S;
    console.log('{{class_model.name.get_capitalized_camel()}}Actions.SET_{{class_model.name.get_capitalized_snake()}}S');
    return __assign({}, state);
    {
        {
            class_model.name.get_camel();
        }
    }
    s: action.payload.slice();
}
;
(function (_a, _b, ActionConstants, UPDATE_, _c, _d) {
    var class_model = _b.class_model, name = _b.name, _e = _b.get_capitalized_camel, get_capitalized_camel = _e === void 0 ? () : _e;
    var class_model = _d.class_model, name = _d.name, _f = _d.get_capitalized_snake, get_capitalized_snake = _f === void 0 ? () : _f;
    {
        class_model.name.get_camel();
    }
});
state.;
{
    {
        class_model.name.get_camel();
    }
}
s[action.payload.index];
var updated = {}, _a = void 0, class_model = _a.class_model, name = _a.name, _b = _a.get_capitalized_camel, get_capitalized_camel = _b === void 0 ? () : _b;
{
    {
        {
            class_model.name.get_camel();
        }
    }
    action.payload.updated;
    {
        {
            class_model.name.get_capitalized_camel();
        }
    }
}
;
var _c = { class_model: .name.get_camel() };
s = state..concat([{}, { class_model: .name.get_camel() }, s]);
{
    {
        class_model.name.get_camel();
    }
}
s[action.payload.index] = updated;
{
    {
        class_model.name.get_capitalized_camel();
    }
}
;
return __assign({}, state);
{
    {
        class_model.name.get_camel();
    }
}
s: {
    {
        class_model.name.get_camel();
    }
}
s;
;
({});
{
    class_model.name.get_capitalized_camel();
}
ActionConstants.DELETE_;
{
    {
        class_model.name.get_capitalized_snake();
    }
}
var old = {}, _d = void 0, class_model = _d.class_model, name = _d.name, _e = _d.get_capitalized_camel, get_capitalized_camel = _e === void 0 ? () : _e;
s = state..concat([{}, { class_model: .name.get_camel() }, s]);
old;
{
    {
        class_model.name.get_capitalized_camel();
    }
}
s.splice(action.payload, 1);
return __assign({}, state);
{
    {
        class_model.name.get_camel();
    }
}
s: old;
{
    {
        class_model.name.get_capitalized_camel();
    }
}
s;
;
return state;
