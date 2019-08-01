package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.value.NewsStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;

    public long newNews(NewsDto newsDto, NewsStatus newsStatus) {
        News news = News.builder()
                .name(newsDto.getName())
                .uri(newsDto.getUri())
                .image(newsDto.getImage())
                .title(newsDto.getTitle())
                .content(newsDto.getContent())
                .status(newsStatus)
                .build();
        if (isRegistered(news)) {
            throw new AlreadyExistException("Already registered news");
        }

        return newsRepository.save(news).getId();
    }

    public void setToRegister(News news){
        if (isRegistered(news)) {
            throw new AlreadyExistException("Already registered news");
        }
        news.setStatus(NewsStatus.REGISTERED);
    }

    public void modify(News news){

    }

    public News getNewsById(long id) {
        if (!newsRepository.existsById(id)) {
            throw new InvalidValueException("Invalid entity id : " + id);
        }

        return newsRepository.findById(id).get();
    }

    // TODO : 중복되는 조건?
    private boolean isRegistered(News news) {
        if (newsRepository.existsByNameAndUri(news.getName(), news.getUri())) {
            return true;
        }

        return false;
    }
}
