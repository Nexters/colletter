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
    @JsonIgnore
    private long id;
    @JsonIgnore
    private UserRole role;
    private String email;
    private String name;
    private String image;
    @JsonIgnore
    private boolean theme;
    @JsonIgnore
    private LocalDateTime signUpAt;
    @JsonIgnore
    private String access_token;
    @JsonIgnore
    private String refresh_token;

    @Builder
    public UserDto(String email, String name, String image) {
        this.email = email;
        this.name = name;
        this.image = image;
    }
}
