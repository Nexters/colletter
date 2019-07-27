package com.nexters.colletter.domain.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;
    @Column(name = "email")
    private String email;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "sex")
    private boolean sex;
    @Column(name = "image")
    private String image;
    @Column(name = "theme")
    private boolean theme;
    @Column(name = "access_token")
    private String access_token;
    @Column(name = "refresh_token")
    private String refresh_token;
    @ManyToMany
    @JoinTable(
            name = "user_news",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "new_id")
    )
    private List<News> news;

    @Builder
    public User(
            String email,
            String name,
            boolean sex,
            String image,
            boolean theme,
            String access_token,
            String refresh_token
    ) {
        this.email = email;
        this.name = name;
        this.sex = sex;
        this.image = image;
        this.theme = theme;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
}
