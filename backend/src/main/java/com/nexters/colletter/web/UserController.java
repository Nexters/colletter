package com.nexters.colletter.web;

import com.nexters.colletter.app.AuthenticationService;
import com.nexters.colletter.app.UserService;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.service.BookmarkService;
import com.nexters.colletter.domain.value.Response;
import com.nexters.colletter.web.dto.CustomUserDetail;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BookmarkService bookmarkService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public Response login(String email, String name, String image) {
        UserDto userDto = UserDto.builder()
                .email(email)
                .name(name)
                .image(image)
                .build();
        // TODO : null check
        return new Response("access_token", authenticationService.login(userDto));
    }

    @ApiOperation(value = "북마크 등록 / 취소")
    @PostMapping("/bookmark/{newsId}")
    public Response bookmark(
            @AuthenticationPrincipal CustomUserDetail userDetail,
            @PathVariable long newsId) {
        boolean onOrOff = bookmarkService.bookmark(userDetail.getId(), newsId);
        return new Response("Status", onOrOff);
    }
}
