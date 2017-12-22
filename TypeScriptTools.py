from enum import Enum
import re


class CaseType(Enum):
    CamelCase = 1
    camelCase = 2
    SNAKE_CASE = 3
    snake_case = 4


class CaseConversion:
    CamelCaseReg = re.compile('([A-Z][a-z]*)+')
    camelCaseReg = re.compile('[a-z]+([A-Z][a-z]*)*')
    snake_case_reg = re.compile('[a-z]+(_[a-z]+)*')
    SNAKE_CASE_REG = re.compile('[A-Z]+(_[A-Z]+)*')

    @staticmethod
    def converse(case_name, case_type):
        re.findall(CaseConversion.CamelCaseReg, case_name)

        return case_name


def type_map(type_kotlin):
    type_ts = type_kotlin
    return type_ts