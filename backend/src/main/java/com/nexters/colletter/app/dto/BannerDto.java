package com.nexters.colletter.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BannerDto {
    @NotNull
    @NotBlank
    private String name;
    @NotNull
    @NotBlank
    @JsonIgnore
    private String image;
    @NotNull
    @NotBlank
    private String title;
    @NotNull
    @NotBlank
    private String subTitle;
    @NotNull
    private int priority;
}
