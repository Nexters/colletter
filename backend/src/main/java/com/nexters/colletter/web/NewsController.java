package com.nexters.colletter.web;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.app.dto.RequestNewsDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.RequestNews;
import com.nexters.colletter.domain.repository.RequestNewsRepository;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import com.nexters.colletter.web.dto.CustomUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@RestController
@RequestMapping("/news")
@Validated
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping()
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/request")
    public List<RequestNews> getAllRequestNews() {
        return newsService.getAllRequestNews();
    }

    @GetMapping("/category/{category_id}")
    public List<News> getAllNewsByCategory(@PathVariable long category_id) {
        return newsService.getAllNewsByCategory(category_id);
    }

    @GetMapping("/{id}")
    public News getNews(@PathVariable long id) {
        return newsService.getNewsById(id);
    }

    @GetMapping("/latest")
    public List<News> getLatestNews() {
        return newsService.getAllLatestNews();
    }

    @GetMapping("/latest/{count}")
    public List<News> getLatestNews(@PathVariable @Min(1) int count) {
        return newsService.getLatestNews(count);
    }

    @GetMapping("/best")
    public List<News> getAllBestNews() {
        return newsService.getAllBestNews();
    }

    @GetMapping("/best/{count}")
    public List<News> getBestNews(@PathVariable @Min(1) int count) {
        return newsService.getBestNews(count);
    }

    @GetMapping("/pick")
    public List<News> getAllPickedNews() {
        return newsService.getAllPickedNews();
    }

    @GetMapping("/pick/{count}")
    public List<News> getPickedNews(@PathVariable @Min(1) int count) {
        return newsService.getPickedNews(count);
    }
}
