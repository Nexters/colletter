package com.nexters.colletter.domain.model;

import com.nexters.colletter.domain.value.NewsStatus;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "news")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id")
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "uri")
    private String uri;
    // TODO
    @Column(name = "view")
    private int view;
    @Column(name = "image")
    private String image;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "date")
    private LocalDateTime updatedAt;

    // request / registered
    @Column(name = "status")
    private NewsStatus status;
    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToMany(mappedBy = "bookmarks")
    @Builder.Default
    private List<User> bookmarked = new ArrayList<>();

    @Builder
    public News(
            String name,
            String uri,
            int view,
            String image,
            String title,
            String content,
            Category category
    ) {
        this.name = name;
        this.uri = uri;
        this.view = view;
        this.image = image;
        this.title = title;
        this.content = content;
        this.category = category;
    }

    public void setStatus(NewsStatus newsStatus) {
        this.status = newsStatus;
    }

    /**
     * called before insert
     */
    @PrePersist
    public void updatedAt() {
        this.updatedAt = LocalDateTime.now();
    }

    // TODO : add verification logic
    public void bookmarkedBy(User user) {
        bookmarked.add(user);
    }
}
