package com.msa.excercise.dto

import com.msa.excercise.domain.ExercisePart
import java.time.LocalDate

class ExerciseDto {
    data class CreateHistoryReq(
            var exerciseId: Long,
            var set: Int,
            var rep: Int,
            var weight: Int,
            var date: LocalDate
    )

    data class CreateExerciseReq(
            var exerciseId: Long,
            var part: ExercisePart,
            var name: String
    )
}