package com.nexters.colletter.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.value.ThemeStatus;
import com.nexters.colletter.domain.value.UserRole;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserDto {
    @JsonIgnore
    private long id;
    @JsonIgnore
    private UserRole role;
    @NotNull
    @NotBlank
    private String email;
    @NotNull
    @NotBlank
    private String name;
    @NotNull
    @NotBlank
    private String image;
    @JsonIgnore
    private ThemeStatus theme;
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

    public UserDto(User user) {
        this.id = user.getId();
        this.role = user.getRole();
        this.email = user.getEmail();
        this.name = user.getName();
        this.image = user.getImage();
        this.theme = user.getTheme();
        this.signUpAt = user.getSignUpAt();
        this.access_token = user.getAccess_token();
        this.refresh_token = user.getRefresh_token();
    }
}
