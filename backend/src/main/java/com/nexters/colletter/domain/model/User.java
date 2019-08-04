package com.nexters.colletter.domain.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.value.ThemeStatus;
import com.nexters.colletter.domain.value.UserRole;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.*;

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
    @Column(name = "role")
    private UserRole role = UserRole.NORMAL;
    @Column(name = "email")
    private String email;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "image")
    private String image;
    @Column(name = "theme")
    private ThemeStatus theme;
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
    private Set<News> bookmarks = new HashSet<>();
    @Column(name = "bookmarks_count")
    private int bookmarkCount;

    @Builder
    public User(
            UserRole role,
            String email,
            String name,
            String image,
            ThemeStatus theme,
            String access_token,
            String refresh_token
    ) {
        this.role = role;
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

    public boolean isAdmin() {
        if (this.role == UserRole.ADMIN) {
            return true;
        }
        return false;
    }

    // TODO : add verification logic
    public void bookmark(News news) {
        bookmarks.add(news);
        bookmarkCount++;
    }

    public void bookmarkCancel(News news) {
        bookmarks.remove(news);
        bookmarkCount--;
    }

    public boolean isBookmarked(News news) {
        if (bookmarks.contains(news)) {
            return true;
        }
        return false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
