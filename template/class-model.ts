export class ${entity} {
<#list fields as f>
${f.name}: ${f.type}; </br>
</#list>

}