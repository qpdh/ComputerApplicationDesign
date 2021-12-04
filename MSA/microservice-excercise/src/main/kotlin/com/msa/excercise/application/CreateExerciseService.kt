package com.msa.excercise.application

import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.dto.ExerciseDto

interface CreateExerciseService {
    fun createExercise(exerccise:ExerciseDto.CreateExerciseReq): Exercise
}