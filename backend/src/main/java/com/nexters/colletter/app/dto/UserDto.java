package com.nexters.colletter.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nexters.colletter.domain.value.UserRole;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserDto {
    private long id;
    private UserRole role;
    private String email;
    private String name;
    private String image;
    private boolean theme;
    private LocalDateTime signUpAt;
    private String access_token;
    private String refresh_token;

    @Builder
    public UserDto(String email, String name, String image) {
        this.email = email;
        this.name = name;
        this.image = image;
    }
}
