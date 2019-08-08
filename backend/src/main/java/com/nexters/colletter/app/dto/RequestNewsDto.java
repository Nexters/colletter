package com.nexters.colletter.app.dto;

import com.nexters.colletter.domain.value.CategoryType;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class RequestNewsDto {
    @NotNull
    private CategoryType categoryType;
    @NotNull
    @NotBlank
    private String uri;
    @NotNull
    @NotBlank
    private String description;
}
