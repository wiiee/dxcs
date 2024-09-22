package com.example.dxcs.interceptor

import com.example.dxcs.entity.User
import com.example.dxcs.service.UserService
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.stereotype.Component
import org.springframework.util.StringUtils
import org.springframework.web.servlet.HandlerInterceptor
import java.time.LocalDateTime


@Component
class AuthInterceptor : HandlerInterceptor {
    @Autowired
    lateinit var userService: UserService

    val logger: Logger = LoggerFactory.getLogger(AuthInterceptor::class.java)

    @Throws(Exception::class)
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        var sessionId = request.getParameter("sessionId")
        if (!StringUtils.hasText(sessionId)) {
            val authorization = request.getHeader(HttpHeaders.AUTHORIZATION)
            if (StringUtils.hasText(authorization) && authorization.length == 43) {
                sessionId = authorization.substring(7)
            }
        }

        if (!StringUtils.hasText(sessionId)) {
            logger.error(String.format("%s: no sessionId", request.requestURI))
            response.status = HttpServletResponse.SC_UNAUTHORIZED
            return false
        }

        val user: User? = userService.getUserBySessionId(sessionId)
        if (user == null) {
            response.status = HttpServletResponse.SC_EXPECTATION_FAILED
            return false
        }

        userService.save(user)

        request.setAttribute("user", user)
        return true
    }
}