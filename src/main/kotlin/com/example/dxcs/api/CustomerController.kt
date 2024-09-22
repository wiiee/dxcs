package com.example.dxcs.api

import com.example.dxcs.entity.Customer
import com.example.dxcs.entity.User
import com.example.dxcs.repository.CustomerRepository
import jakarta.servlet.http.HttpServletRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.util.StringUtils
import org.springframework.web.bind.annotation.*
import java.time.LocalDate
import java.util.*


@RestController
@RequestMapping("/api/customer")
class CustomerController {
    @Autowired
    lateinit var request: HttpServletRequest

    @Autowired
    private lateinit var customerRepository: CustomerRepository

    @GetMapping("/getAll")
    fun getCustomers(): List<Customer> {
//        val localUser: User = request.getAttribute("user") as User
        return customerRepository.findAll()
    }

    @GetMapping("/getById/{id}")
    fun getById(@PathVariable id: String): Customer {
        return customerRepository.findById(id).get()
    }

    @PostMapping("/save")
    fun save(@RequestBody customer: Customer): Customer {
        if (!StringUtils.hasText(customer.id)) {
            customer.id = UUID.randomUUID().toString()
        }

        if (!StringUtils.hasText(customer.name)) {
            return customer
        }

        return customerRepository.save(customer)
    }
}