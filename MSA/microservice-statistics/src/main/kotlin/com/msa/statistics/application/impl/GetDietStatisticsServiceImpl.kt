package com.msa.statistics.application.impl

import com.msa.statistics.application.GetDietStatisticsService
import com.msa.statistics.dto.DietDto
import com.msa.statistics.dto.DietStatistics
import com.msa.statistics.feign.DietServiceClient
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class GetDietStatisticsServiceImpl(
    @Autowired private val dietServiceClient: DietServiceClient,
    @Autowired private val circuitBreakerFactory: CircuitBreakerFactory<*,*>

): GetDietStatisticsService {
    override fun get(username: String, dietOption: DietDto.DietOption, period: Int): List<DietStatistics> {

        /**
         * apply circuitbreaker code 장애 고립을 위한 목적
         * @author 김기현
         */
        // original code
        //val dietHistories =dietServiceClient.getDietHistories(username, period)
        // default data - for example
        var defaultDietHistoryList :List<DietDto.DietHistory> =
            listOf(DietDto.DietHistory(100,
                DietDto.Food(100,"circuitbreak지점 닭발",203,4,16,13),
                "김기현", LocalDate.now()))

        val circuitBreaker: CircuitBreaker = circuitBreakerFactory.create("circuitbreaker")

        val dietHistories = circuitBreaker.run(
            { dietServiceClient.getDietHistories(username, period) }
        ) { _ -> defaultDietHistoryList }

        val groupByDate = dietHistories.groupBy { it.date }

        val from = LocalDate.now().minusMonths(period.toLong())
        val to = LocalDate.now()

        val statistics = mutableListOf<DietStatistics>()

        from.datesUntil(to).forEach {
            var contains = false
            val keys = groupByDate.keys.iterator()

            while(keys.hasNext()) {
                val targetDate = keys.next()
                if(targetDate == it) {
                    contains = true
                    statistics.add(DietStatistics.of(targetDate, groupByDate[targetDate] ?: error("no such key"), dietOption))
                    break
                }
            }
            if(!contains) {
                statistics.add(DietStatistics(0, it))
            }
        }

        statistics.sortBy { it.date }

        return statistics
    }
}