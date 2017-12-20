import re


class BaseDeclaration:
    parent = None
    name = ''
    params = {}


class Annotation(BaseDeclaration):
    def __init__(self):
        self.name = '@'

    def __init__(self, str_annotation):
        self.name = str_annotation


class ClassEntity(BaseDeclaration):
    entity_type = ''
    return_type = ''
    annotations = []
    member_list = []
    body = []


class EntityFile:
    path = ''
    lines = []
    package_name = ''
    import_list = []
    model_entity = None

    def __init__(self, file_path):
        self.path = file_path

        comment_line_pattern = re.compile('^\\\\.*')
        # comment_begin_pattern = re.compile(r'^\s*\\\*.*')
        # comment_end_pattern = re.compile(r'^\s*\*\\.*')
        # annotation_begin_pattern = re.compile('^\s*@.*')
        class_pattern = re.compile('class[\s|:|{]')
        class_with_curl = re.compile('class.+{')
        begin_with_dot = re.compile(r'^\s*\.')
        end_with_dot = re.compile(r'.+\.$')

        with open(self.path, 'r') as file_open:
            self.lines = file_open.readlines()
            self.lines = list(map(lambda x: x.strip('\n').strip(), self.lines))

        for idx in range(len(self.lines)):
            if self.lines[idx].count('(') > self.lines[idx].count(')'):
                self.lines[idx + 1] = self.lines[idx] + '\n' + self.lines[idx + 1]
                self.lines[idx] = ''

            assert(len(re.findall(class_pattern, self.lines[idx])) < 2)
            if class_with_curl.match(self.lines[idx]):
                pass
            else:
               if self.lines[idx].count('{') > self.lines[idx].count('}'):
                   self.lines[idx + 1] = self.lines[idx] + '\n' + self.lines[idx + 1]
                   self.lines[idx] = ''

            if begin_with_dot.match(self.lines[idx]):
                self.lines[idx] = self.lines[idx - 1] + self.lines[idx]
                self.lines[idx - 1] = ''
            if end_with_dot.match(self.lines[idx]):
                self.lines[idx + 1] = self.lines[idx] + self.lines[idx + 1]
                self.lines[idx] = ''

        self.lines = map(lambda x:
                         (self.check_line(x), x)
                         , list(filter(lambda x:
                                       not comment_line_pattern.match(x) and len(x) > 0,
                                       self.lines)
                                )
                         )
        print(self.lines)

    @staticmethod
    def check_line(line):
        class_pattern = re.compile('class[\s|:|{]')
        package_pattern = re.compile('^\s*package\s+')
        import_pattern = re.compile('^\s*import\s+')
        pass

    def parse(self):
        pass
        # annotation_stack = []
        # member_stack = []
        # self.model_entity = ClassEntity()
        # current_class = self.model_entity
        # variable_name_pattern = re.compile('^.*var\s+[a-zA-z]+\s*:?')
        # annotation_pattern = re.compile('^\s*@.+\n')
        # while len(self.lines):
        #     line = self.lines.pop(0)
        #     if annotation_pattern.match(line):
        #         annotation_stack.append(line)
        #         continue
        #     elif class_begin_pattern.match(line):
        #         current_class.annotations = annotation_stack
        #         annotation_stack = []
        #         continue
        #     elif variable_name_pattern.match(line):
        #         pass