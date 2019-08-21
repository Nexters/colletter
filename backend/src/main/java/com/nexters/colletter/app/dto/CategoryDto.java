package com.nexters.colletter.app.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class CategoryDto {
    private String nameEN;
    private String nameKR;
}
