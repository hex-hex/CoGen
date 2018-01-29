"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
{
    class_model.name.get_capitalized_camel();
}
Model;
{
    {
         % ;
        for (member in class_model.member_list % )
            ;
    }
    {
        {
            member.name.get_camel();
        }
    }
    {
        {
            member.typescript_type;
        }
    }
    ;
    {
         % endfor % ;
    }
}
