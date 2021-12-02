package com.msa.excercise.controller

import com.msa.excercise.application.CreateExerciseService
import com.msa.excercise.application.CreateHistoryService
import com.msa.excercise.application.GetExerciseService
import com.msa.excercise.application.GetHistoryService
import com.msa.excercise.domain.Exercise
import com.msa.excercise.domain.ExerciseHistory
import com.msa.excercise.domain.ExercisePart
import com.msa.excercise.dto.ExerciseDto
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class ExerciseController(
        @Autowired private val getExerciseService: GetExerciseService,
        @Autowired private val getHistoryService: GetHistoryService,
        @Autowired private val createHistoryService: CreateHistoryService,
        @Autowired private val createExerciseService: CreateExerciseService
) {

    @GetMapping("/")
    fun getExercises(
            @RequestParam("part") part: ExercisePart,
            @RequestHeader("username") username: String
        ): ResponseEntity<List<Exercise>> {
        val exercises = getExerciseService.getExercises(part)
        return ResponseEntity(exercises, HttpStatus.OK)
    }

    /**
     * 운동 생성 api
     * @author 김기현
     * @since 2021-12-1
     */
    @PostMapping("/")
    fun createExercises(
        @RequestBody @Valid createExerciseReq: ExerciseDto.CreateExerciseReq
    ): ResponseEntity<Exercise> {
        val exercise = createExerciseService.createExercise(createExerciseReq)
        return ResponseEntity(exercise, HttpStatus.OK)
    }

    @GetMapping("/{id}")
    fun getExercise(
            @PathVariable("id") exerciseId: Long,
            @RequestHeader("username") username: String
    ): ResponseEntity<Exercise> {
        val exercise = getExerciseService.getExercise(exerciseId)
        return ResponseEntity(exercise, HttpStatus.OK)
    }

    @PostMapping("/histories")
    fun createHistory(
            @RequestBody @Valid CreateHistoryReq: ExerciseDto.CreateHistoryReq,
            @RequestHeader("username") username: String
        ): ResponseEntity<ExerciseHistory> {
        val history = createHistoryService.createHistory(CreateHistoryReq, username)
        return ResponseEntity(history, HttpStatus.CREATED)
    }

    @GetMapping("/histories")
    fun getHistories(
            @RequestHeader("username") username: String,
            @RequestParam("part") part: ExercisePart,
            @RequestParam("period") period: Int
    ): ResponseEntity<List<ExerciseHistory>> {
        val histories = getHistoryService.getHistories(username, part, period)
        return ResponseEntity(histories, HttpStatus.OK)
    }

    @GetMapping("/today")
    fun getDailyHistories(
            @RequestHeader("username") username: String
    ): ResponseEntity<List<ExerciseHistory>> {
        val dailyHistories = getHistoryService.getDailyHistories(username)
        return ResponseEntity(dailyHistories, HttpStatus.OK)
    }
}