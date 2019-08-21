package com.nexters.colletter.web;

import com.nexters.colletter.app.AuthenticationService;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.app.UserService;
import com.nexters.colletter.app.dto.RequestNewsDto;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.service.BookmarkService;
import com.nexters.colletter.domain.value.Response;
import com.nexters.colletter.web.dto.CustomUserDetail;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private AuthenticationService authenticationService;

    // TODO : third-party에서 image가 없을 때 어떤 것을 반환하는지?
    @PostMapping("/login")
    public Response login(@RequestBody @Valid UserDto userDto) {
        return new Response("access_token", authenticationService.login(userDto));
    }

    @ApiOperation(value = "북마크 등록 / 취소")
    @PutMapping("/bookmark/{newsId}")
    public Response bookmark(
            @AuthenticationPrincipal CustomUserDetail userDetail,
            @PathVariable @NotNull @Min(1) long newsId) {
        boolean onOff = userService.bookmark(userDetail.getId(), newsId);
        return new Response("Status", onOff);
    }

    @GetMapping("/bookmark")
    public Set<News> getBookmarkNews(@AuthenticationPrincipal CustomUserDetail userDetail){
        return userService.getBookmarkNews(userDetail.getId());
    }

    @GetMapping("/bookmark/count")
    public Response getBookmarkCount(@AuthenticationPrincipal CustomUserDetail userDetail) {
        return new Response("Bookmark count", userService.getBookmarkCount(userDetail.getId()));
    }

    @GetMapping("/profile")
    public UserDto getUserProfile(@AuthenticationPrincipal CustomUserDetail userDetail) {
        return userService.getUserProfile(userDetail.getId());
    }

    @PostMapping("/news")
    public Response requestNews(@RequestBody @Valid RequestNewsDto requestNewsDto) {
        // TODO : validation
        newsService.requestNews(
                requestNewsDto
        );
        return new Response("Success", null);
    }
}
