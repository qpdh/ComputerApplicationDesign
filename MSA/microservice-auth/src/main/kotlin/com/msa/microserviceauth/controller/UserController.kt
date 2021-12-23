package com.msa.microserviceauth.controller

import com.msa.microserviceauth.application.MyInfoService
import com.msa.microserviceauth.application.SignInService
import com.msa.microserviceauth.application.SignUpService
import com.msa.microserviceauth.domain.User
import com.msa.microserviceauth.dto.MyPageDto
import com.msa.microserviceauth.dto.SignInDto
import com.msa.microserviceauth.dto.SignUpDto
import io.micrometer.core.annotation.Timed
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.env.Environment
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class UserController(
        @Autowired private val signUpService: SignUpService,
        @Autowired private val signInService: SignInService,
        @Autowired private val myInfoService: MyInfoService,
        @Autowired private val env: Environment
) {
    /**
     * user status check function
     * @author 기현
     */
    @GetMapping("/health_check")
    @Timed(value = "user.status", longTask = true)
    fun status(): String {
        return String.format(
            "It's Working in User Service"
                    + ", port(local.server.port)=" + env.getProperty("local.server.port")
                    + ", port(server.port)=" + env.getProperty("server.port")
                    + ", gateway ip=" + env.getProperty("gateway.ip")
                    + ", message=" + env.getProperty("greeting.message")
                    + ", token secret=" + env.getProperty("token.secret")
                    + ", token expiration time=" + env.getProperty("token.expiration_time")
        )
    }

    @PostMapping("/register")
    fun register(@RequestBody @Valid signUpReq: SignUpDto.SignUpReq): ResponseEntity<User> {
        val user = signUpService.signUp(signUpReq)
        return ResponseEntity(user, HttpStatus.CREATED)
    }

    @PostMapping("/login")
    fun login(@RequestBody @Valid signInReq: SignInDto.SignInReq): ResponseEntity<SignInDto.SignInResult> {
        val signInResult = signInService.signIn(signInReq)
        return ResponseEntity(signInResult, HttpStatus.OK)
    }

    @GetMapping("/my_page")
    fun myPage(@RequestHeader("username") username: String): ResponseEntity<MyPageDto.MyPageResult> {
        val userInfo = myInfoService.myInfo(username)

        val myPageResult = MyPageDto.MyPageResult(userInfo)
        return ResponseEntity(myPageResult, HttpStatus.OK)
    }
}