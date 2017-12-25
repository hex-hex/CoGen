import os
import sys
import jinja2
from EntityFile import *
from PyQt5.QtWidgets import *


class MainApp(QMainWindow):

    def __init__(self, parent=None):
        super(MainApp, self).__init__(parent)
        self.file = None
        self.jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader('./template/'))
        win_width = 300
        win_height = 600
        self.setWindowTitle('CoGen v0.1')
        self.setFixedSize(win_width, win_height)

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
        btn_open.resize(win_width - 40, 40)
        btn_open.move(20, 40)
        btn_open.clicked.connect(self.open_file)

        btn_export = QPushButton('Select Export Folder', self)
        btn_export.resize(win_width - 40, 40)
        btn_export.move(20, 100)
        btn_export.clicked.connect(self.export_file)

        self.tree_view = QTreeWidget(self)
        self.tree_view.resize(win_width - 40, 400)
        self.tree_view.move(20, 160)

        self.statusBar().showMessage('Ready to load file.')
        self.show()

    def export_file(self):
        if self.file is None:
            return
        folder = QFileDialog.getExistingDirectory(self, 'Select Destination Folder')
        parent_folder = str(folder) + '/' \
            + self.file.entity_declaration.name.get_kebab() + 's'
        list_folder = parent_folder + '/' \
            + self.file.entity_declaration.name.get_kebab() + '-list'
        form_folder = parent_folder + '/' \
            + self.file.entity_declaration.name.get_kebab() + '-form'

        if not os.path.exists(parent_folder):
            os.makedirs(parent_folder)

        with open(parent_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '.service.ts', 'w+') as service_file:
            service_output = self.jinja_env.get_template('class-service.ts')\
                .render({'class_model': self.file.entity_declaration})
            service_file.write(service_output)

        with open(parent_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '.model.ts', 'w+') as model_file:
            model_output = self.jinja_env.get_template('class-model.ts')\
                .render({'class_model': self.file.entity_declaration})
            model_file.write(model_output)

        with open(parent_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + 's.module.ts', 'w+') as module_file:
            pass

        if not os.path.exists(list_folder):
            os.makedirs(list_folder)
        with open(list_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '-list.component.html', 'w+') as list_html_file:
            list_html_output = self.jinja_env.get_template('list-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            list_html_file.write(list_html_output)

        with open(list_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '-list.component.ts', 'w+') as list_ts_file:
            list_ts_output = self.jinja_env.get_template('list-class-component.ts') \
                .render({'class_model': self.file.entity_declaration})
            list_ts_file.write(list_ts_output)

        if not os.path.exists(form_folder):
            os.makedirs(form_folder)
        with open(form_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '-form.component.html', 'w+') as form_html_file:
            form_html_output = self.jinja_env.get_template('form-class-component.html')\
                .render({'class_model': self.file.entity_declaration})
            form_html_file.write(form_html_output)

        with open(form_folder + '/'
                  + self.file.entity_declaration.name.get_kebab()
                  + '-form.component.ts', 'w+') as form_ts_file:
            form_ts_output = self.jinja_env.get_template('form-class-component.ts')\
                .render({'class_model': self.file.entity_declaration})
            form_ts_file.write(form_ts_output)
        self.statusBar().showMessage('All files are exported.')

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, 'Open a xls file', '', 'Kotlin Files (*.kt)')
        if len(file_name) == 0:
            return
        self.file = EntityFile(file_name)
        self.file.parse()
        self.show_class()
        self.statusBar().showMessage('File loaded.')

    def show_class(self):
        self.tree_view.clear()
        self.tree_view.setHeaderItem(QTreeWidgetItem(['Class Tree']))
        root_class = QTreeWidgetItem(self.tree_view, [self.file.entity_declaration.name.get_capitalized_camel()])
        for item in self.file.entity_declaration.member_list:
            QTreeWidgetItem(root_class, [item.name.get_capitalized_camel()])


if __name__ == "__main__":
    app = QApplication(sys.argv)
    ex = MainApp()
    sys.exit(app.exec_())
