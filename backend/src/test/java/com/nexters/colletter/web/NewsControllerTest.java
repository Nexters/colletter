package com.nexters.colletter.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexters.colletter.app.NewsService;
import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.value.Response;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.transaction.Transactional;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class NewsControllerTest {
    @Autowired
    private ObjectMapper mapper;
    @Autowired
    private MockMvc mockMvc;
    private NewsController newsController;

    @Before
    public void setUp() {
        newsController = mock(NewsController.class);
    }

    @Test
    public void requestNewsTest() throws Exception {
        // given
        NewsDto newsDto = new NewsDto(
                "name",
                "uri",
                "image",
                "title",
                "content"
        );

        given(this.newsController.requestNews(newsDto)).willReturn(
                new Response("Success", null, null)
        );

        // when
        MvcResult result =
                mockMvc.perform(MockMvcRequestBuilders.post("/news/")
                        .characterEncoding("utf-8")
                        .content(mapper.writeValueAsString(newsDto))
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isOk())
                        .andDo(print())
                        .andReturn();

        Response response = mapper.readValue(
                result.getResponse().getContentAsString(),
                Response.class
        );

        // then
        Assert.assertEquals("Success", response.getResult());
        Assert.assertEquals(null, response.getDatas());
        Assert.assertEquals(null, response.getError());
    }
}
