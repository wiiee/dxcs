package com.example.dxcs.service

import com.example.dxcs.entity.User
import com.example.dxcs.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.aggregation.MergeOperation.UniqueMergeId.id
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*


@Service
class UserService {
    @Autowired
    lateinit var userRepository: UserRepository

    fun signUp(user: User): Pair<Boolean, String> {
        if (userRepository.findByIdOrNull(user.id) != null) {
            return Pair(false, "该电话号码已注册过，请修改后重新注册")
        }

        user.sessionId = UUID.randomUUID().toString()
        user.created = LocalDateTime.now()
        save(user)
        return Pair(true, user.sessionId)
    }

    fun login(id: String, password: String): Pair<Boolean, String> {
        val user: User? = userRepository.findByIdOrNull(id)

        if (user == null) {
            return Pair(false, "没有该用户")
        } else if (user.password == password) {
            user.sessionId = UUID.randomUUID().toString()
            save(user)
            return Pair(true, user.sessionId)
        } else {
            return Pair(false, "密码错误")
        }
    }

    fun getUserBySessionId(sessionId: String): User? {
        return userRepository.findBySessionId(sessionId)
    }

    fun save(user: User) {
        user.lastUpdated = LocalDateTime.now()
        userRepository.save(user)
    }
}