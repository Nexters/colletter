package com.nexters.colletter.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.value.CategoryType;
import com.nexters.colletter.domain.value.NewsStatus;
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
    private CategoryType categoryType;
    @NotNull
    @NotBlank
    private String title;
    @NotNull
    @NotBlank
    private String content;
}
