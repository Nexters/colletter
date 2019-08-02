package com.nexters.colletter.integration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.web.NewsController;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@WebAppConfiguration
@ActiveProfiles("test")
public class NewsTest {
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @Autowired
    private WebApplicationContext context;
    @Autowired
    NewsService newsService;
    @Autowired
    NewsRepository newsRepository;
    @Autowired
    UserRepository userRepository;

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();

        User user1 = User.builder().name("user1").build();
        User user2 = User.builder().name("user2").build();
        User user3 = User.builder().name("user3").build();

        News news1 = News.builder().name("news1").build();
        News news2 = News.builder().name("news2").build();
        News news3 = News.builder().name("news3").build();

        user1.bookmark(news1);
        user1.bookmark(news2);
        user1.bookmark(news3);

        user2.bookmark(news1);
        user2.bookmark(news2);

        user3.bookmark(news1);

        news1.bookmarkedBy(user1);
        news1.bookmarkedBy(user2);
        news1.bookmarkedBy(user3);

        news2.bookmarkedBy(user1);
        news2.bookmarkedBy(user2);

        news3.bookmarkedBy(user3);

        newsRepository.saveAll(Arrays.asList(news1, news2, news3));
        userRepository.saveAll(Arrays.asList(user1, user2, user3));
    }

    @Test
    public void getBestNewsTest() throws Exception {
        MvcResult result =
                mockMvc.perform(get("/news/best/3")
                        .characterEncoding("utf-8")
                        .contentType(MediaType.APPLICATION_JSON))
                        .andDo(MockMvcResultHandlers.print())
                        .andReturn();

        List<News> newsList = mapper
                .readValue(
                        result.getResponse().getContentAsString(),
                        List.class
                );

        Assert.assertEquals(3, newsList.size());
    }
}
