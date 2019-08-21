//package com.nexters.colletter.web;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.nexters.colletter.app.dto.RequestNewsDto;
//import com.nexters.colletter.domain.value.Response;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import static org.mockito.Mockito.mock;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//
///**
// * TODO : SpringBootTest -> WebMvcTest
// * TODO : Mocking Controller
// */
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@ActiveProfiles("test")
//public class NewsControllerTest {
//    @Autowired
//    private ObjectMapper mapper;
//    private MockMvc mockMvc;
//    @Autowired
//    private NewsController newsController;
//
//    @Before
//    public void setUp() {
//        mockMvc = MockMvcBuilders.standaloneSetup(newsController).build();
//    }
//
//    @Test
//    public void requestNewsTest() throws Exception {
//        // given
//        RequestNewsDto requestNewsDto = RequestNewsDto.builder()
//                .uri("uri")
//                .categoryId(1)
//                .description("description")
//                .build();
//
////        given(this.newsController.requestNews(newsDto)).willReturn(
////                new Response("Success", null)
////        );
//
//        // when
//        MvcResult result =
//                mockMvc.perform(MockMvcRequestBuilders.post("/users/news")
//                        .characterEncoding("utf-8")
//                        .content(mapper.writeValueAsString(requestNewsDto))
//                        .contentType(MediaType.APPLICATION_JSON))
////                        .andExpect(status().isOk())
//                        .andDo(print())
//                        .andReturn();
//
//        Response response = mapper.readValue(
//                result.getResponse().getContentAsString(),
//                Response.class
//        );
//
//        // then
//        Assert.assertEquals("Success", response.getDescription());
//        Assert.assertEquals(null, response.getData());
//    }
//}
