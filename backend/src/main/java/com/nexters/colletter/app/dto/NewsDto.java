package com.nexters.colletter.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NewsDto {
    @NotNull
    @NotBlank
    private String name;
    @NotNull
    @NotBlank
    private String uri;
    @NotNull
    @NotBlank
    @JsonIgnore
    private String image;
    @NotNull
    private long categoryId;
    @NotNull
    @NotBlank
    private String content;
}
