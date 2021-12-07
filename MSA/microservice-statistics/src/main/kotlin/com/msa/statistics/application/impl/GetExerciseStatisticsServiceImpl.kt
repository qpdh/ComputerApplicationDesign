package com.msa.statistics.application.impl

import com.msa.statistics.application.GetExerciseStatisticsService
import com.msa.statistics.dto.ExerciseDto
import com.msa.statistics.dto.ExerciseStatistics
import com.msa.statistics.feign.ExerciseServiceClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetExerciseStatisticsServiceImpl(
        @Autowired private val exerciseServiceClient: ExerciseServiceClient,
        @Autowired private val circuitBreakerFactory: CircuitBreakerFactory<*, *>

): GetExerciseStatisticsService {
    override fun get(username: String, part: ExerciseDto.ExercisePart, period: Int): List<ExerciseStatistics> {

        //original code
        //val exerciseHistories = exerciseServiceClient.getExerciseHistories(username, part, period)
        /**
         * apply circuitbreaker code
         * @author 김기현
         */
        val circuitBreaker: CircuitBreaker = circuitBreakerFactory.create("circuitbreaker")
        val exerciseHistories = circuitBreaker.run(
            { exerciseServiceClient.getExerciseHistories(username, part, period) }
        ) { throwable:Throwable? -> listOf<ExerciseDto.ExerciseHistory>() }


        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        val statistics = mutableListOf<ExerciseStatistics>()

        val groupByDate = exerciseHistories.groupBy { it.date }

        from.datesUntil(to).forEach {
            var contains = false
            val keys = groupByDate.keys.iterator()

            while(keys.hasNext()) {
                val targetDate = keys.next()
                if(targetDate == it) {
                    contains = true
                    statistics.add(ExerciseStatistics.of(targetDate, groupByDate[targetDate] ?: error("no such key")))
                    break
                }
            }
            if(!contains) {
                statistics.add(ExerciseStatistics(0, it))
            }
        }

        statistics.sortBy { it.date }

        return statistics
    }
}