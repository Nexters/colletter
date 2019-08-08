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
    private UserRole role;
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
    @Builder.Default
    @Column(name = "bookmarks_count")
    private int bookmarkCount = 0;

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

    public User(UserDto userDto) {
        this.id = userDto.getId();
        this.role = userDto.getRole();
        this.email = userDto.getEmail();
        this.name = userDto.getName();
        this.image = userDto.getImage();
        this.theme = userDto.getTheme();
        this.signUpAt = userDto.getSignUpAt();
        this.access_token = userDto.getAccess_token();
        this.refresh_token = userDto.getRefresh_token();
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

    public void changeImage(String newImage) {
        this.image = image;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changeAccessToken(String newAccessToken) {
        this.access_token = newAccessToken;
    }

    public void changeRefreshToken(String newRefreshToken) {
        this.refresh_token = newRefreshToken;
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
