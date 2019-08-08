package com.nexters.colletter.domain.model;

import com.fasterxml.jackson.annotation.*;
import com.nexters.colletter.domain.value.NewsStatus;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.*;

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
    @Column(name = "image")
    private String image;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "date")
    private LocalDateTime updatedAt;

    // request / register / pick
    @Column(name = "status")
    private NewsStatus status;
    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToMany(mappedBy = "bookmarks")
    @Builder.Default
    @JsonIgnore
    private Set<User> bookmarked = new HashSet<>();
    @Column(name = "bookmarks_count")
    private int bookmarkedCount;

    @Builder
    public News(
            String name,
            String uri,
            String image,
            String title,
            String content,
            NewsStatus status,
            Category category
    ) {
        this.name = name;
        this.uri = uri;
        this.image = image;
        this.title = title;
        this.content = content;
        this.status = status;
        this.category = category;
    }

    public void setStatus(NewsStatus newsStatus) {
        this.status = newsStatus;
    }

    public void addImage(String imageUrl) {
        this.image = imageUrl;
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
        bookmarkedCount++;
    }

    public void bookmarkCanceledBy(User user) {
        bookmarked.remove(user);
        bookmarkedCount--;
    }

    public boolean isBookmarkedBy(User user) {
        if (bookmarked.contains(user)) {
            return true;
        }
        return false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        News news = (News) o;
        return id == news.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
