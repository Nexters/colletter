package com.nexters.colletter.domain.model;

import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.value.CategoryValue;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Optional;

@RunWith(SpringRunner.class)
@DataJpaTest
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
                CategoryValue.design,
                CategoryValue.game,
                CategoryValue.food,
                CategoryValue.education,
                CategoryValue.development,
                CategoryValue.plan
        ));
    }

    @Test
    @Transactional
    public void createUser() {
        long id = userRepository.save(User.builder()
                .email("leesd556@gmail.com")
                .name("KIM")
                .image(null)
                .theme(true)
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
                .title("title")
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
        Category foodCategory = categoryRepository.findById("c_0").get();
        News news = News.builder()
                .name("food")
                .uri("food.com")
                .image(null)
                .title("food")
                .content("delicious")
                .category(foodCategory)
                .build();

        User user = User.builder()
                .name("kim")
                .email("leesd556@gmail.com")
                .image(null)
                .theme(true)
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
