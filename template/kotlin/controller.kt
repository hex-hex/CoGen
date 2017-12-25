package com.cfgglobal.fee.controller

import com.cfgglobal.fee.domain.Agent
import com.cfgglobal.fee.service.AgentService
import com.cfgglobal.test.base.JpaBeanUtil
import io.vavr.collection.HashMap
import org.apache.commons.lang3.RandomStringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/v1/agent")
class AgentController {

    @Autowired
    lateinit var agentService: AgentService

    @Autowired
    lateinit var passwordEncoder: PasswordEncoder

    @GetMapping
    fun index(pageable: Pageable, request: HttpServletRequest): ResponseEntity<Page<*>> {
        val queryParams = HashMap.ofAll(request.parameterMap)
        val page = agentService.findBySecurity(request.method, request.requestURI, queryParams, pageable)
        return ResponseEntity.ok(page)
    }

    @GetMapping("/{id}")
    fun agentIndex(@PathVariable id: Long?): ResponseEntity<Agent> {
        val agent = agentService.findOne(id)
        return ResponseEntity.ok(agent)
    }


    @ResponseBody
    @PostMapping
    @Transactional
    fun save(@RequestBody agent: Agent): ResponseEntity<Agent> {
        val password = RandomStringUtils.randomAlphanumeric(8)
        agent.password = passwordEncoder.encode(password)
        return ResponseEntity.ok(agent)
    }

    @PutMapping("/{id}")
    fun agentUpdate(@PathVariable id: Long?, @RequestBody agent: Agent): ResponseEntity<Agent> {
        val oldAgent = agentService.findOne(id)
        JpaBeanUtil.copyNonNullProperties(agent, oldAgent)
        agentService.save(oldAgent)
        return ResponseEntity.ok(oldAgent)
    }

    @DeleteMapping("/{id}")
    fun agentDelete(@PathVariable id: Long?, request: HttpServletRequest):ResponseEntity<*> {
        agentService.deleteBySecurity(id,request.method, request.requestURI)
        return ResponseEntity.noContent().build<Any>()
    }
}