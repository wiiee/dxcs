package com.example.dxcs.config

import com.example.dxcs.interceptor.AuthInterceptor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
class WebConfig : WebMvcConfigurer {
    @Autowired
    lateinit var authInterceptor: AuthInterceptor

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/api/**").allowedMethods("*");
    }

//    override fun addInterceptors(registry: InterceptorRegistry) {
//        registry.addInterceptor(authInterceptor)
//            .addPathPatterns("/api/**")
//            .excludePathPatterns(
//                "/api/user/login", "/api/user/signUp"
//            )
//    }
}