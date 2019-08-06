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
    /**
     *
     * @return 취소 시 false, 등록 시 true
     */
    public boolean bookmark(User user, News news) {
        if (isBookmarked(user, news)) {
            user.bookmarkCancel(news);
            news.bookmarkCanceledBy(user);
            return false;
        }
        user.bookmark(news);
        news.bookmarkedBy(user);
        return true;
    }

    private boolean isBookmarked(User user, News news) {
        if (user.isBookmarked(news) && news.isBookmarkedBy(user)) {
            return true;
        }
        return false;
    }
}
