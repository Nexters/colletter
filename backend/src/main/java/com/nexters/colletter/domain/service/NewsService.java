package com.nexters.colletter.domain.service;

import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;

    public void register(News news){

    }

    public void modify(News news){

    }
}
