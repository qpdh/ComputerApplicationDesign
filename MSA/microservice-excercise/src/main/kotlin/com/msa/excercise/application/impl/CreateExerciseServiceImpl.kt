package com.msa.excercise.application.impl

import com.msa.excercise.application.CreateExerciseService
import com.msa.excercise.application.CreateHistoryService
import com.msa.excercise.application.GetExerciseService
import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.dto.ExerciseDto
import com.msa.excercise.repository.ExerciseHistoryRepository
import com.msa.excercise.repository.ExerciseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreateExerciseServiceImpl(
        @Autowired private val exerciseRepository: ExerciseRepository
): CreateExerciseService {
    override fun createExercise(createExerciseReq: ExerciseDto.CreateExerciseReq): Exercise {
        val exercise=Exercise(
                id=null,
                name = createExerciseReq.name,
                part = createExerciseReq.part
        )

        return exerciseRepository.save(exercise)
    }

}