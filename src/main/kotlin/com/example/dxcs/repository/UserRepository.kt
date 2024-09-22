package com.example.dxcs.repository

import com.example.dxcs.entity.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : MongoRepository<User, String> {
    fun findBySessionId(sessionId: String): User?
}