package com.nexters.colletter.domain.model;

import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.value.ThemeStatus;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class ModelTest {
    @Autowired
    UserRepository userRepository;
    @Autowired
    NewsRepository newsRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @Before
    public void initCategory() {
        categoryRepository.saveAll(Arrays.asList(
                new Category(0, "DESIGN", "디자인", null),
                new Category(1, "EDUCATION", "교육", null),
                new Category(2, "DEVELOPMENT", "개발", null),
                new Category(3, "ART_CULTURE", "문화예술", null),
                new Category(4, "COMMON_SENSE", "상식", null),
                new Category(5, "ENTERPRISE", "기업", null),
                new Category(6, "FINANCE", "금융", null),
                new Category(7, "IT_STARTUP", "IT-스타트업", null),
                new Category(8, "POLITICS", "정치", null),
                new Category(9, "RELIGION", "종교", null),
                new Category(10, "TREND", "트렌드", null)
        ));
    }

    @Test
    @Transactional
    public void createUser() {
        long id = userRepository.save(User.builder()
                .email("leesd556@gmail.com")
                .name("KIM")
                .image(null)
                .theme(ThemeStatus.WHITE)
                .access_token(null)
                .refresh_token(null)
                .build())
                .getId();

        Optional<User> option = userRepository.findById(id);

        Assert.assertTrue(option.isPresent());
        User user = option.get();

        Assert.assertEquals(id, user.getId());
    }

    @Test
    @Transactional
    public void createNews() {
        long id = newsRepository.save(News.builder()
                .name("news")
                .uri("localhost.com")
                .image(null)
                .content("content")
                .build())
                .getId();

        Optional<News> option = newsRepository.findById(id);

        Assert.assertTrue(option.isPresent());
        News news = option.get();

        Assert.assertEquals(id, news.getId());
    }

    @Test
    @Transactional
    public void userBookmarkFoodNews() {
        Category designCategory = categoryRepository.findById((long) 1).get();
        News news = News.builder()
                .name("design")
                .uri("design.com")
                .image(null)
                .content("design")
                .category(designCategory)
                .build();

        User user = User.builder()
                .name("kim")
                .email("leesd556@gmail.com")
                .image(null)
                .theme(ThemeStatus.WHITE)
                .build();

        user.bookmark(news);
        news.bookmarkedBy(user);

        long userId = userRepository.save(user).getId();
        long newsId = newsRepository.save(news).getId();

        user = userRepository.findById(userId).get();
        news = newsRepository.findById(newsId).get();

        Assert.assertEquals(1, user.getBookmarks().size());
        Assert.assertEquals(1, news.getBookmarked().size());
    }
}
