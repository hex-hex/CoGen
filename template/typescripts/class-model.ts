export class {{class_model.name.get_capitalized_camel()}} {
{% for member in class_model.member_list %}
    {{member.name.get_camel()}}: {{member.typescript_type}};
{% endfor %}
}