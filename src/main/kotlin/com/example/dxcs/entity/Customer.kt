package com.example.dxcs.entity

import java.time.LocalDate

data class Customer(
    val id: String,
    val name: String,
    val companyName: String,
    val mobile: String,
    val weChat: String,
    val other: String,
    val source: String,
    val requirement: String,
    val followUp: String,
    val createdDate: LocalDate,
    val followUpDate: LocalDate,
    val followUpUser: String
)
