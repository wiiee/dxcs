package com.example.dxcs.entity

import java.time.LocalDateTime

data class User(val id: String,
                val name: String,
                val password: String,
                var sessionId: String,
                var created: LocalDateTime,
                var lastUpdated: LocalDateTime)
