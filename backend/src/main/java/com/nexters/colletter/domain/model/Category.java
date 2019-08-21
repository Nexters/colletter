package com.nexters.colletter.domain.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "category")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private long id;
    @Column(name = "name_en")
    private String nameEN;
    @Column(name = "name_kr")
    private String nameKR;
    @Column(name = "image")
    private String image;

    public Category(String nameEN, String nameKR, String image) {
        this.nameEN = nameEN;
        this.nameKR = nameKR;
        this.image = image;
    }

    public void addImage(String imageUrl) {
        this.image = imageUrl;
    }
}
