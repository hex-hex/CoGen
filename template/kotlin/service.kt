package {{package_base}}.service

import {{package_base}}.domain.{{class_model.name.get_capitalized_camel()}}
import com.cfgglobal.test.service.base.BaseService
import org.springframework.stereotype.Service

@Service
class {{class_model.name.get_capitalized_camel()}}Service: BaseService<{{class_model.name.get_capitalized_camel()}}, Long>()