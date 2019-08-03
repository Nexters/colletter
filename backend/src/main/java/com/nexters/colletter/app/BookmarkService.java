package com.nexters.colletter.app;

import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private NewsRepository newsRepository;

    public void regigster(long userId, long newsId) {

    }
}
