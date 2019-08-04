package com.nexters.colletter.app.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NewsDto {
    private String name;
    private String uri;
    private String image;
    private String title;
    private String content;
}
