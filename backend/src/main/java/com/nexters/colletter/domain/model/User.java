package com.nexters.colletter.domain.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    @Column(name = "image")
    private String image;
    @Column(name = "theme")
    private boolean theme;
    @Column(name = "date")
    private LocalDateTime signUpAt;
    @Column(name = "access_token")
    private String access_token;
    @Column(name = "refresh_token")
    private String refresh_token;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_news",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "new_id")
    )
    @Builder.Default
    @JsonIgnore
    private List<News> bookmarks = new ArrayList<>();

    @Builder
    public User(
            String email,
            String name,
            String image,
            boolean theme,
            String access_token,
            String refresh_token
    ) {
        this.email = email;
        this.name = name;
        this.image = image;
        this.theme = theme;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }

    /**
     * called before insert
     */
    @PrePersist
    public void signUpAt() {
        this.signUpAt = LocalDateTime.now();
    }

    // TODO : add verification logic
    public void bookmark(News news) {
        bookmarks.add(news);
    }
}
