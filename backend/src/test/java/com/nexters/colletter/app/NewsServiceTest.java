package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.config.H2Config;
import com.nexters.colletter.config.RepositoryConfig;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.value.NewsStatus;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class NewsServiceTest {
    @Autowired
    private NewsService newsService;
    @Autowired
    private NewsRepository newsRepository;

    @Test
    public void test(){
        // given
        NewsDto newsDto = new NewsDto(
                "name",
                "uri",
                "image",
                "title",
                "content"
        );

        // when
        long id = newsService.newNews(newsDto, NewsStatus.REGISTERED);

        // then
        Assert.assertTrue(newsRepository.findById(id).isPresent());

        News news = newsRepository.findById(id).get();

        Assert.assertEquals(newsDto.getName(), news.getName());
        Assert.assertEquals(newsDto.getUri(), news.getUri());
        Assert.assertEquals(newsDto.getImage(), news.getImage());
        Assert.assertEquals(newsDto.getTitle(), news.getTitle());
        Assert.assertEquals(newsDto.getContent(), news.getContent());
    }
}
