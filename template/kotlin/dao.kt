package {{package_base}}.dao

import {{package_base}}.domain.{{class_model.name.get_capitalized_camel()}}
import com.cfgglobal.test.dao.base.BaseDao
import org.springframework.stereotype.Repository

@Repository
interface {{class_model.name.get_capitalized_camel()}}Dao : BaseDao<{{class_model.name.get_capitalized_camel()}}, Long> {
}