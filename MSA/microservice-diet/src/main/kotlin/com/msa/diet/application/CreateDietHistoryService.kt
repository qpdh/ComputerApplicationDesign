package com.msa.diet.application

import com.msa.diet.domain.DietHistory
import com.msa.diet.dto.DietDto

interface CreateDietHistoryService {
    fun create(username: String, createDietHistoryReq: DietDto.CreateDietHistoryReq): DietHistory
}