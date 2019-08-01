package com.nexters.colletter.domain.value;

public class Category {
    private String id;
    private String name;

    public Category(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Category design = new Category("c_0", "디자인");
    public static Category game = new Category("c_1", "게임");
    public static Category food = new Category("c_2", "음식");
    public static Category education = new Category("c_3", "교육");
    public static Category development = new Category("c_4", "개발");
    public static Category plan = new Category("c_5", "기획");
}
