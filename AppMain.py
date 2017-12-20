import re
import os
import sys
import jinja2
from ClassModel import *
from PyQt5.QtWidgets import *


class MainApp(QMainWindow):

    def __init__(self, parent=None):
        super(MainApp, self).__init__(parent)
        self.file = None
        self.jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader('./template/'))
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
        if self.file is None:
            return
        folder = QFileDialog.getExistingDirectory(self, 'Select Destination Folder')
        parent_folder = str(folder) + '/' + self.file.entity_declaration.name + 's'
        list_folder = parent_folder + '/' + self.file.entity_declaration.name + '-list'
        form_folder = parent_folder + '/' + self.file.entity_declaration.name + '-form'

        if not os.path.exists(parent_folder):
            os.makedirs(parent_folder)

        module_file = open(parent_folder + '/' + self.file.entity_declaration.name + 's.module.ts', 'w+')
        module_file.close()

        if not os.path.exists(list_folder):
            os.makedirs(list_folder)
        with open(list_folder + '/' + self.file.entity_declaration.name + '-list.component.html', 'w+') as list_html_file:
            list_html_output = self.jinja_env.get_template('list-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            list_html_file.write(list_html_output)

        list_component_file = open(list_folder + '/' + self.file.entity_declaration.name + '-list.component.ts', 'w+')
        list_component_file.close()

        if not os.path.exists(form_folder):
            os.makedirs(form_folder)
        with open(form_folder + '/' + self.file.entity_declaration.name + '-form.component.html', 'w+') as form_html_file:
            form_html_output = self.jinja_env.get_template('form-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            form_html_file.write(form_html_output)

        with open(form_folder + '/' + self.file.entity_declaration.name + '-form.component.ts', 'w+') as form_component_file:
            form_component_output = self.jinja_env.get_template('form-class-component.ts')\
                .render({'class_model': self.file.entity_declaration})
            form_component_file.write(form_component_output)

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, 'Open a xls file', '', 'Kotlin Files (*.kt)')
        if file_name is None:
            return
        self.file = EntityFile(file_name)
        self.file.parse()
        print(self.file)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    ex = MainApp()
    sys.exit(app.exec_())
