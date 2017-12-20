export class {{class_model.name}} {
{% for member in class_model.member_list %}
    {{member.name}}: {{member.return_type}};
{% endfor %}
}