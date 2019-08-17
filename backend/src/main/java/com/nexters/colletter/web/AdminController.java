package com.nexters.colletter.web;

import com.nexters.colletter.app.AuthenticationService;
import com.nexters.colletter.app.BannerService;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.app.dto.BannerDto;
import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.value.NewsStatus;
import com.nexters.colletter.domain.value.Response;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

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
        News Create, Update, Delete
     */
    @PostMapping("/news")
    public Response registerNews(@RequestBody NewsDto newsDto, @RequestParam("image") MultipartFile imageFile) throws IOException {
        // TODO : validation
        newsService.registerNews(
                newsDto,
                imageFile
        );
        return new Response("Success", null);
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
    public Response deleteNewsById(@PathVariable long newsId){
        newsService.deleteNewsById(newsId);
        return new Response("Success", null);
    }

    @PutMapping("/news/{newsId}/status/{status}/")
    public Response changeNewsStatus(@PathVariable long newsId, @PathVariable NewsStatus status) {
        newsService.changeNewsStatus(newsId, status);
        return new Response("Success", null);
    }

    /*
        Banner Create, Update, Delete
     */
    @PostMapping("/banner")
    public Response registerBanner(@RequestBody BannerDto bannerDto, @RequestParam("image") MultipartFile imageFile) throws IOException {
        bannerService.registerBanner(
                bannerDto,
                imageFile
        );
        return new Response("Success", null);
    }

    // TODO : implements me!
    // TODO : s3 modify process
    @ApiOperation(value = "미완성")
    @PutMapping("/banner")
    public Response modifyBanner(@RequestBody BannerDto bannerDto, @RequestParam("image") MultipartFile imageFile) {
        return null;
    }

    @DeleteMapping("/banner/{bannerId}")
    public Response deleteBannerById(@PathVariable long bannerId) {
        bannerService.deleteBannerById(bannerId);
        return new Response("Success", null);
    }
}
