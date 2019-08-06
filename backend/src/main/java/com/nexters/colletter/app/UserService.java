package com.nexters.colletter.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.service.BookmarkService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private BookmarkService bookmarkService;
    @Autowired
    ModelMapper modelMapper;

    public UserDto getUserProfile(long userId) {
        User user = getUserById(userId);
        UserDto userDto = new UserDto(user);
        return userDto;
    }

    public boolean bookmark(long userId, long newsId) {
        User user = getUserById(userId);
        News news = getNewsById(newsId);
        boolean onOff = bookmarkService.bookmark(user, news);
        userRepository.save(user);
        newsRepository.save(news);
        return onOff;
    }

    public Set<News> getBookmarkNews(long userId) {
        User user = getUserById(userId);
        return user.getBookmarks();
    }

    public int getBookmarkCount(long userId) {
        User user = getUserById(userId);
        return user.getBookmarkCount();
    }

    private User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }

    private News getNewsById(long newsId) {
        return newsRepository.findById(newsId).orElseThrow(() -> new InvalidValueException("No Matched news id"));
    }
}
