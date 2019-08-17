package com.nexters.colletter.web;

import com.nexters.colletter.app.AuthenticationService;
import com.nexters.colletter.app.BannerService;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.app.dto.BannerDto;
import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.Banner;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private BannerService bannerService;
    @Autowired
    private NewsService newsService;

    // TODO : polish
    @PostMapping("/login")
    public Response login(@RequestBody String identifier) {
        return new Response("access_token", authenticationService.adminLogin(identifier));
    }

    /*
        News Create, Read, Update, Delete
     */
    @PostMapping(value = "/news", consumes = {"multipart/form-data;charset=UTF-8"})
    public Response registerNews(@RequestBody NewsDto newsDto, @RequestParam("image") MultipartFile imageFile) throws IOException {
        // TODO : validation
        newsService.registerNews(
                newsDto,
                imageFile
        );
        return new Response("Success", null);
    }

    @GetMapping("/news")
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/news/request")
    public List<News> getAllRequestNews() {
        return newsService.getAllRequestNews();
    }

    // TODO : implements me!
    // TODO : s3 modify process
    @PutMapping("/news")
    @ApiOperation(value = "미완성")
    public Response modifyNews(@RequestBody NewsDto newsDto, @RequestParam("image") MultipartFile imageFile) {
        return null;
    }

    // TODO : implements me!
    @DeleteMapping("/news/{newsId}")
    public Response deleteNews(@PathVariable long newsId){
        newsService.deleteNewsById(newsId);
        return new Response("Success", null);
    }

    @PutMapping("/news/{newsId}/status/{status}")
    public Response changeNewsStatus(@PathVariable long newsId, @PathVariable NewsStatus status) {
        newsService.changeNewsStatus(newsId, status);
        return new Response("Success", null);
    }

    /*
        Banner Create, Read, Update, Delete
     */
    @PostMapping("/banner")
    public Response registerBanner(@RequestBody BannerDto bannerDto, @RequestParam("image") MultipartFile imageFile) throws IOException {
        bannerService.registerBanner(
                bannerDto,
                imageFile
        );
        return new Response("Success", null);
    }

    @GetMapping("/banner")
    public List<Banner> getAllBanners() {
        return bannerService.getAllBanners();
    }

    // TODO : implements me!
    // TODO : s3 modify process
    @ApiOperation(value = "미완성")
    @PutMapping("/banner")
    public Response modifyBanner(@RequestBody BannerDto bannerDto, @RequestParam("image") MultipartFile imageFile) {
        return null;
    }

    @DeleteMapping("/banner/{bannerId}")
    public Response deleteBanner(@PathVariable long bannerId) {
        bannerService.deleteBannerById(bannerId);
        return new Response("Success", null);
    }
}
