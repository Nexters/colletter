package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.NewsRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class NewsServiceTest {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    private NewsService newsService;
    private S3Service s3Service;

    @Test
    public void test() throws IOException {
        // given
        NewsDto newsDto = new NewsDto(
                "name",
                "uri",
                "image",
                1,
                "content"
        );
        s3Service = mock(S3Service.class);
        when(s3Service.upload(
                null,
                "news",
                newsDto.getName() + "." + newsDto.getCategoryId()
        )).thenReturn("imageUrl");
        newsService = new NewsService(
                newsRepository,
                null,
                categoryRepository,
                s3Service
        );

        // when
        long id = newsService.registerNews(newsDto, null);

        // then
        Assert.assertTrue(newsRepository.findById(id).isPresent());
        News news = newsRepository.findById(id).get();

        Assert.assertEquals("imageUrl", news.getImage());
        Assert.assertEquals(newsDto.getName(), news.getName());
        Assert.assertEquals(newsDto.getUri(), news.getUri());
        Assert.assertEquals(newsDto.getContent(), news.getContent());
    }
}
