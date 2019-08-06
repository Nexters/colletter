package com.nexters.colletter.web;

import com.nexters.colletter.domain.value.Response;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/healthz")
public class HealthCheckController {
    @GetMapping
    public Response healthCheck() {
        return new Response("Alive", null);
    }
}
