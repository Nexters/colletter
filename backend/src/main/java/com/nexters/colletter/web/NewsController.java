package com.nexters.colletter.web;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.AlreadyExsistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping(value = "/news", produces = "application/json")
public class NewsController {
    @Autowired
    NewsService newsService;

    @GetMapping("/{id}")
    public Response getNewsById(@PathVariable long id) {
        try {
            return new Response(
                    "Success",
                    null,
                    Arrays.asList(newsService.getNewsById(id))
            );
        } catch (InvalidValueException ex) {
            return new Response("Fail", ex.toString(), null);
        }
    }

    @PostMapping("/")
    public Response requestNews(@RequestBody NewsDto newsDto) {
        // TODO : validation
        try {
            newsService.newNews(
                    newsDto,
                    NewsStatus.REQUEST
            );
            return new Response("Success", null, null);
        } catch (AlreadyExsistException | InvalidValueException ex) {
            return new Response("Fail", ex.toString(), null);
        }
    }
}
