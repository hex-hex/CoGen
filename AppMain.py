import re
import os
import sys
import jinja2
from PyQt5.QtWidgets import *

class EntityModel:
    name = ''
    member_type = {}

    def __init__(self, model_name):
        self.name = model_name


class MainApp(QMainWindow):
    def __init__(self, parent=None):
        super(MainApp, self).__init__(parent)

        action_open = QAction('&Open File', self)
        action_open.setStatusTip('Open a kotlin file')
        action_open.setShortcut('Ctrl+O')
        action_open.triggered.connect(self.open_file)

        action_export = QAction('&Export File', self)
        action_export.setStatusTip('Export file')
        action_export.setShortcut('Ctrl+E')
        action_export.triggered.connect(self.export_file)

        file_menu = self.menuBar().addMenu('&File')
        file_menu.addAction(action_open)
        file_menu.addAction(action_export)
        self.setWindowTitle('CoGen v0.1')
        self.setFixedSize(600, 400)
        self.statusBar().showMessage('Ready to load file.')
        self.show()

    def export_file(self):
        if self.class_name is None:
            return
        folder = QFileDialog.getExistingDirectory(self,'Select Destination Folder')
        parent_folder = str(folder) + '/' + self.class_name[0] + 's'
        list_folder = parent_folder + '/' + self.class_name[0] + '-list'
        form_folder = parent_folder + '/' + self.class_name[0] + '-form'
        if not os.path.exists(parent_folder):
            os.makedirs(parent_folder)
            module_file = open(parent_folder + '/' + self.class_name[0] + 's.module.ts', 'w+')
            module_file.close()
            os.makedirs(list_folder)
            list_html_file = open(list_folder + '/' + self.class_name[0] + '-list.component.html', 'w+')
            list_html_file.close()
            list_component_file = open(list_folder + '/' + self.class_name[0] + '-list.component.ts', 'w+')
            list_component_file.close()
            os.makedirs(form_folder)
            form_html_file = open(form_folder + '/' + self.class_name[0] + '-form.component.html', 'w+')
            form_html_file.close()
            form_component_file = open(form_folder + '/' + self.class_name[0] + '-form.component.ts', 'w+')
            form_component_file.close()

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, 'Open a xls file', '', 'Kotlin Files (*.kt)')
        file = self.load_file_cotentfile(file_name)
        self.class_name = self.get_class_name(file)

    def load_file_cotentfile(self, file_name):
        with open(file_name, 'r') as file_open:
            file_cotent = file_open.readlines()
        return file_cotent

    @staticmethod
    def get_class_name(file_content):
        class_name_pattern = re.compile('\s*class\s+[a-zA-z]+\s*:?')
        class_name = []
        for line in file_content:
            match = class_name_pattern.match(line)
            if match:
                class_name.append(match.group().strip('class').strip(':').strip())
        return class_name


if __name__ == "__main__":
    app = QApplication(sys.argv)
    ex = MainApp()
    sys.exit(app.exec_())
