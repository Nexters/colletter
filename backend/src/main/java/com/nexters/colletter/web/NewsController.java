package com.nexters.colletter.web;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import com.nexters.colletter.web.dto.CustomUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/news", produces = "application/json")
public class NewsController {
    @Autowired
    NewsService newsService;

    @GetMapping("/{id}")
    public News getNews(@PathVariable long id) {
        return newsService.getNewsById(id);
    }

    @GetMapping("/latest/{count}")
    public List<News> getLatestNews(@PathVariable int count) {
        // TODO : count가 음수일 때
        return newsService.getLatestNews(count);
    }

    @GetMapping("/best/{count}")
    public List<News> getBestNews(@PathVariable int count) {
        // TODO : count가 음수일 때
        return newsService.getBestNews(count);
    }

    @GetMapping("/pick/{count}")
    public List<News> getPickedNews(@PathVariable int count) {
        // TODO : count가 음수일 때
        return newsService.getPickedNews(count);
    }

    @PostMapping("/")
    public Response requestNews(@RequestBody NewsDto newsDto) {
        // TODO : validation
        newsService.newNews(
                newsDto,
                NewsStatus.REQUEST
        );
        return new Response("Success", null);
    }
}
