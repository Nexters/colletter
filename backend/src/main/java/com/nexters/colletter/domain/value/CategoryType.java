package com.nexters.colletter.domain.value;

import com.nexters.colletter.domain.model.Category;

public enum CategoryType {
    DESIGN("디자인"),
    GAME("게임"),
    FOOD("음식"),
    EDUCATION("교육"),
    DEVELOPMENT("개발"),
    PLAN("기획");

    private String name;

    CategoryType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
