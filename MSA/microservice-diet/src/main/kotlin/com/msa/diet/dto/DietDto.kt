package com.msa.diet.dto

import java.time.LocalDate

class DietDto {
    data class CreateDietHistoryReq(
            val foodId: Long,
            val date: LocalDate
    )

    data class CreateFoodReq(
            var foodId:Long,
            var name: String,
            var calorie: Int,
            var carboHydrate: Int,
            var protein: Int,
            var fat: Int
    )
}