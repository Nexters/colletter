package com.nexters.colletter.web;

import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.AlreadyExsistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    NewsService newsService;

    @PostMapping("/news")
    public Response registerNews(@RequestBody NewsDto newsDto) {
        // TODO : validation
        try {
            newsService.newNews(
                    newsDto,
                    NewsStatus.REGISTERED
            );
            return new Response("Success", null, null);
        } catch (AlreadyExsistException | InvalidValueException ex) {
            return new Response("Fail", ex.toString(), null);
        }
    }

    @PutMapping("/news/{id}")
    public void toRegister(@PathVariable long id) {

    }
}
