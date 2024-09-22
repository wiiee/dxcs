package com.example.dxcs.api

import com.example.dxcs.entity.User
import com.example.dxcs.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/user")
class UserController {
    @Autowired
    lateinit var userService: UserService

    @RequestMapping("/signUp")
    fun signUp(user: User): Pair<Boolean, String> {
        return userService.signUp(user)
    }

    @RequestMapping("/login")
    fun login(id: String, password: String): Pair<Boolean, String> {
        return userService.login(id, password)
    }
}