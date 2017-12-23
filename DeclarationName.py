from enum import Enum
import re


class DeclarationName:

    @staticmethod
    class CaseType(Enum):
        CamelCase = 1
        camelCase = 2
        SNAKE_CASE = 3
        snake_case = 4
        kebab_case = 5
        KEBAB_CASE = 6

    def __init__(self, case_name):
        if re.compile('^([A-Z][a-z]*)+$').match(case_name):
            self.name_list = re.findall(r'[A-Z][a-z]*', case_name)
        elif re.compile('^[a-z]+([A-Z][a-z]*)*$').match(case_name):
            self.name_list = re.findall(r'^[a-z]+', case_name)
            self.name_list = self.name_list + re.findall(r'[A-Z][a-z]*', case_name)
        elif re.compile('^[a-z]+(_[a-z]+)*$').match(case_name) or re.compile('^[A-Z]+(_[A-Z]+)*$'):
            self.name_list = case_name.split('_')
        elif re.compile('^[a-z]+(-[a-z]+)*$').match(case_name) or re.compile('^[A-Z]+(-[A-Z]+)*$').match(case_name):
            self.name_list = case_name.split('-')
        else:
            self.name_list = []
        self.name_list = [word.lower() for word in self.name_list]

    # default output is snake_case
    def __str__(self):
        return self.get_case(DeclarationName.CaseType.camelCase)

    def __len__(self):
        return len(self.name_list)

    def get_case(self, case_type):
        if case_type == DeclarationName.CaseType.CamelCase:
            return ''.join([word.capitalize() for word in self.name_list])
        if case_type == DeclarationName.CaseType.CamelCase:
            return ''.join([word if idx == 0 else word.capitalize() for idx, word in enumerate(self.name_list)])
        if case_type == DeclarationName.CaseType.kebab_case:
            return '-'.join(self.name_list)
        if case_type == DeclarationName.CaseType.snake_case:
            return '_'.join(self.name_list)


