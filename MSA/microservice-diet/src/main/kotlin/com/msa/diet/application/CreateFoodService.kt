package com.msa.diet.application

import com.msa.diet.domain.DietHistory
import com.msa.diet.domain.Food
import com.msa.diet.dto.DietDto

interface CreateFoodService { //음식 추가 인터페이스
    fun create( createDietReq: DietDto.CreateFoodReq): Food
}