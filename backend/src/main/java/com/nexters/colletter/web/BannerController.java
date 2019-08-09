package com.nexters.colletter.web;

import com.nexters.colletter.app.BannerService;
import com.nexters.colletter.domain.model.Banner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/banner")
public class BannerController {
    @Autowired
    private BannerService bannerService;

    // TODO
    @GetMapping("/")
    public List<Banner> getAllBanners() {
        return null;
    }

    // TODO
    @GetMapping("/{count}")
    public List<Banner> getBanners(@PathVariable int count) {
        return null;
    }
}
