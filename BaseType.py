import re
from enum import Enum


class DeclareType(Enum):
    PACKAGE = -3
    IMPORT = -2
    UNKNOWN = -1
    ANNOTATION = 0
    CLASS = 1
    FUNCTION = 2
    IMMUTABLE = 3
    MUTABLE = 4
    CONST = 5  # todo
    COMPANION = 6  # todo

    @staticmethod
    def get_keyword(declare_type):
        key_map = {
            DeclareType.IMMUTABLE: 'val',
            DeclareType.MUTABLE: 'var',
            DeclareType.FUNCTION: 'fun',
            DeclareType.CLASS: 'class',
            DeclareType.COMPANION: 'companion',
            DeclareType.CONST: 'const',
        }
        return key_map[declare_type]


class BaseDeclaration:
    parent = None
    name = ''  # CamelCase
    params = {}


class Annotation(BaseDeclaration):

    def __init__(self, str_annotation):
        self.name = str_annotation.strip('@')
        self.name = self.name.split('(')[0]
        if '(' in str_annotation:
            self.params = str_annotation.strip('@').strip(self.name).split(',')


class EntityDeclaration(BaseDeclaration):
    def __init__(self):
        self.annotations = []
        self.member_list = []
        self.entity_type = ''
        self.return_type = ''

    def typescript_type(self):
        type_map = {
            'Int?': 'Number',
            'Int': 'Number',
            'Long?': 'Number',
            'Long': 'Number',
            'Double?': 'Number',
            'Double': 'Number',
            'String': 'String',
            'String?': 'String',
        }
        return type_map[self.return_type] if type_map[self.return_type] is not None else self.return_type.strip('?')
