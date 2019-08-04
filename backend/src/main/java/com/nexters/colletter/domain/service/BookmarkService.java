package com.nexters.colletter.domain.service;

import com.nexters.colletter.app.UserService;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class BookmarkService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private NewsRepository newsRepository;

    /**
     *
     * @param userId
     * @param newsId
     * @return 취소 시 false, 등록 시 true
     */
    public Boolean bookmark(long userId, long newsId) {
        User user = getUserById(userId);
        News news = getNewsById(newsId);

        if (isBookmarked(user, news)) {
            user.bookmarkCancel(news);
            news.bookmarkCanceledBy(user);
            return false;
        }
        user.bookmark(news);
        news.bookmarkedBy(user);
        return true;
    }

    public Set<News> getBookmarkNews(long userId) {
        User user = getUserById(userId);
        return user.getBookmarks();
    }

    public int getBookmarkCount(long userId) {
        User user = getUserById(userId);
        return user.getBookmarkCount();
    }

    private boolean isBookmarked(User user, News news) {
        if (user.isBookmarked(news) && news.isBookmarkedBy(user)) {
            return true;
        }
        return false;
    }

    private User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }

    private News getNewsById(long newsId) {
        return newsRepository.findById(newsId).orElseThrow(() -> new InvalidValueException("No Matched news id"));
    }
}
