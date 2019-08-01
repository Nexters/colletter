package com.nexters.colletter.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NewsDto {
    private String name;
    private String uri;
    private String image;
    private String title;
    private String content;
}
