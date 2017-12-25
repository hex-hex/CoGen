package com.cfgglobal.fee.dao

import com.cfgglobal.fee.domain.Agent
import com.cfgglobal.test.dao.base.BaseDao
import org.springframework.stereotype.Repository

@Repository
interface AgentDao : BaseDao<Agent, Long> {
}