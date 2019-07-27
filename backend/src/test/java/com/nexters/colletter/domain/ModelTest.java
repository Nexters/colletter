package com.nexters.colletter.domain;

import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ModelTest {
    @Autowired
    UserRepository userRepository;
    @Autowired
    NewsRepository newsRepository;

    @Test
    @Transactional
    @Rollback(false)
    public void createUser() {
        User user = User.builder()
                .email("leesd556@gmail.com")
                .name("KIM")
                .sex(true)
                .image(null)
                .theme(true)
                .access_token(null)
                .refresh_token(null)
                .build();

        userRepository.save(user);
    }

    @Test
    @Transactional
    @Rollback(false)
    public void createNews() {
        News news = News.builder()
                .name("news")
                .uri("localhost.com")
                .view(100)
                .image(null)
                .title("title")
                .content("content")
                .build();

        newsRepository.save(news);
    }
}
