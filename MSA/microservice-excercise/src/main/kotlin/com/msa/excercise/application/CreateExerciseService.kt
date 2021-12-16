package com.msa.excercise.application

import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.dto.ExerciseDto

interface CreateExerciseService { //운동 추가 인터페이스
    fun createExercise(exerccise:ExerciseDto.CreateExerciseReq): Exercise
}