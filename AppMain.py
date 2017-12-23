import re
import os
import sys
import jinja2
from ClassModel import *
from DeclarationName import *
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

        action_export = QAction('&Export Files', self)
        action_export.setStatusTip('Export files')
        action_export.setShortcut('Ctrl+E')
        action_export.triggered.connect(self.export_file)

        file_menu = self.menuBar().addMenu('&File')
        file_menu.addAction(action_open)
        file_menu.addAction(action_export)

        btn_open = QPushButton('Open Kotlin File', self)
        btn_open.resize(200, 40)
        btn_open.move(20, 40)
        btn_open.clicked.connect(self.open_file)

        btn_export = QPushButton('Select Export Folder', self)
        btn_export.resize(200, 40)
        btn_export.move(20, 100)
        btn_export.clicked.connect(self.export_file)

        self.setWindowTitle('CoGen v0.1')
        self.setFixedSize(240, 600)

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

        with open(parent_folder + '/' + self.file.entity_declaration.name + '.service.ts', 'w+') as service_file:
            service_output = self.jinja_env.get_template('class-service.ts')\
                .render({'class_model': self.file.entity_declaration})
            service_file.write(service_output)

        with open(parent_folder + '/' + self.file.entity_declaration.name + '.model.ts', 'w+') as model_file:
            model_output = self.jinja_env.get_template('class-model.ts')\
                .render({'class_model': self.file.entity_declaration})
            model_file.write(model_output)

        with open(parent_folder + '/' + self.file.entity_declaration.name + 's.module.ts', 'w+') as module_file:
            pass

        if not os.path.exists(list_folder):
            os.makedirs(list_folder)
        with open(list_folder + '/' + self.file.entity_declaration.name + '-list.component.html', 'w+') as list_html_file:
            list_html_output = self.jinja_env.get_template('list-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            list_html_file.write(list_html_output)

        with open(list_folder + '/' + self.file.entity_declaration.name + '-list.component.ts', 'w+') as list_ts_file:
            list_ts_output = self.jinja_env.get_template('list-class-component.ts') \
                .render({'class_model': self.file.entity_declaration})
            list_ts_file.write(list_ts_output)

        if not os.path.exists(form_folder):
            os.makedirs(form_folder)
        with open(form_folder + '/' + self.file.entity_declaration.name + '-form.component.html', 'w+') as form_html_file:
            form_html_output = self.jinja_env.get_template('form-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            form_html_file.write(form_html_output)

        with open(form_folder + '/' + self.file.entity_declaration.name + '-form.component.ts', 'w+') as form_ts_file:
            form_ts_output = self.jinja_env.get_template('form-class-component.ts')\
                .render({'class_model': self.file.entity_declaration})
            form_ts_file.write(form_ts_output)

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, 'Open a xls file', '', 'Kotlin Files (*.kt)')
        if len(file_name) == 0:
            return
        self.file = EntityFile(file_name)
        self.file.parse()
        self.statusBar().showMessage('File loaded.')


if __name__ == "__main__":
    app = QApplication(sys.argv)
    ex = MainApp()
    sys.exit(app.exec_())
