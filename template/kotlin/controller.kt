package {{package_base}}.controller

import {{package_base}}.domain.{{class_model.name.get_capitalized_camel()}}
import {{package_base}}.service.{{class_model.name.get_capitalized_camel()}}Service
import com.cfgglobal.test.base.JpaBeanUtil
import io.vavr.collection.HashMap
import org.apache.commons.lang3.RandomStringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/v1/{{class_model.name.get_kebab()}}")
class {{class_model.name.get_capitalized_camel()}}Controller {

    @Autowired
    lateinit var {{class_model.name.get_camel()}}Service: {{class_model.name.get_capitalized_camel()}}Service


    @GetMapping
    fun index(pageable: Pageable, request: HttpServletRequest): ResponseEntity<Page<*>> {
        val queryParams = HashMap.ofAll(request.parameterMap)
        val page = {{class_model.name.get_camel()}}Service.findBySecurity(request.method, request.requestURI, queryParams, pageable)
        return ResponseEntity.ok(page)
    }

    @GetMapping("/{id}")
    fun {{class_model.name.get_camel()}}Index(@PathVariable id: Long?): ResponseEntity<{{class_model.name.get_capitalized_camel()}}> {
        val {{class_model.name.get_camel()}} = {{class_model.name.get_camel()}}Service.findOne(id)
        return ResponseEntity.ok({{class_model.name.get_camel()}})
    }


    @ResponseBody
    @PostMapping
    @Transactional
    fun save(@RequestBody {{class_model.name.get_camel()}}: {{class_model.name.get_capitalized_camel()}}): ResponseEntity<{{class_model.name.get_capitalized_camel()}}> {
        return ResponseEntity.ok({{class_model.name.get_camel()}})
    }

    @PutMapping("/{id}")
    fun {{class_model.name.get_camel()}}Update(@PathVariable id: Long?, @RequestBody {{class_model.name.get_camel()}}: {{class_model.name.get_capitalized_camel()}}): ResponseEntity<{{class_model.name.get_capitalized_camel()}}> {
        val old{{class_model.name.get_capitalized_camel()}} = {{class_model.name.get_camel()}}Service.findOne(id)
        JpaBeanUtil.copyNonNullProperties({{class_model.name.get_camel()}}, old{{class_model.name.get_capitalized_camel()}})
        {{class_model.name.get_camel()}}Service.save(old{{class_model.name.get_capitalized_camel()}})
        return ResponseEntity.ok(old{{class_model.name.get_capitalized_camel()}})
    }

    @DeleteMapping("/{id}")
    fun {{class_model.name.get_camel()}}Delete(@PathVariable id: Long?, request: HttpServletRequest):ResponseEntity<*> {
        {{class_model.name.get_camel()}}Service.deleteBySecurity(id,request.method, request.requestURI)
        return ResponseEntity.noContent().build<Any>()
    }
}