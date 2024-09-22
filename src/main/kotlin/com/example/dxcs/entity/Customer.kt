package com.example.dxcs.entity

import org.springframework.data.annotation.Id
import java.time.LocalDate

data class Customer(
    @Id
    var id: String,
    val name: String,
    val companyName: String,
    val mobile: String,
    val weChat: String,
    val other: String,
    val source: String,
    val requirement: String,
    val followUp: String,
    var createdDate: LocalDate?,
    val followUpDate: LocalDate?,
    val followUpUser: String,
    // 线索、商机、已成交
    val type: String?
)
