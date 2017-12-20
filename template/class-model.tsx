export class {{class_model.name}} {
{% for member in class_model.member}
    {{member.name}}: {{member.value_type}};
{% endfor %}
}