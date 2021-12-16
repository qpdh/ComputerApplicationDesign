package com.msa.diet.application.impl

import com.msa.diet.application.CreateDietHistoryService
import com.msa.diet.application.CreateFoodService
import com.msa.diet.application.FoodSearchService
import com.msa.diet.domain.DietHistory
import com.msa.diet.domain.Food
import com.msa.diet.dto.DietDto
import com.msa.diet.repository.DietHistoryRepository
import com.msa.diet.repository.FoodRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreateFoodServiceImpl( //음식 추가 service 구현
        @Autowired private val foodRepository: FoodRepository
): CreateFoodService {
    override fun create(createDietReq: DietDto.CreateFoodReq): Food {
        val food=Food(
                id=null,
                name=createDietReq.name,
                calorie = createDietReq.calorie,
                carboHydrate = createDietReq.carboHydrate,
                protein = createDietReq.protein,
                fat=createDietReq.fat
        )
        return foodRepository.save(food)
    }
}