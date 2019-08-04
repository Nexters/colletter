package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.value.NewsStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public void changeNewsStatus(long newsId, NewsStatus status) {
        News news = getNewsById(newsId);
        if (isRegistered(news)) {
            throw new AlreadyExistException("Already registered news");
        }
        news.setStatus(status);
        newsRepository.save(news);
    }

    public void modify(News news){

    }

    public News getNewsById(long id) {
        if (!newsRepository.existsById(id)) {
            throw new InvalidValueException("Invalid entity id : " + id);
        }

        return newsRepository.findById(id).get();
    }

    public List<News> getLatestNews(int count) {
        Pageable pageable = PageRequest.of(0, count, new Sort(Sort.Direction.DESC, "updatedAt"));
        Page<News> page = newsRepository.findAll(pageable);
        return page.getContent();
    }

    public List<News> getBestNews(int count) {
        Pageable pageable = PageRequest.of(0, count, new Sort(Sort.Direction.DESC, "bookmarkedCount"));
        Page<News> page = newsRepository.findAll(pageable);
        return page.getContent();
    }

    public List<News> getPickedNews(int count) {
        return getRandomNewsListByStatus(NewsStatus.PICK, count);
    }

    private List<News> getRandomNewsListByStatus(NewsStatus newsStatus, int count) {
        List<News> newsList = new ArrayList<>();
        for(int idx = 0 ; idx < count ; idx++) {
            newsList.add(getRandomNewsByStatus(newsStatus));
        }
        // 빈 객체 제거
        newsList.remove(News.builder().build());
        // 중복 제거
        return newsList.parallelStream().distinct().collect(Collectors.toList());
    }

    private News getRandomNewsByStatus(NewsStatus newsStatus) {
        Long idxAll = newsRepository.count();
        int idx = (int)(Math.random() * idxAll);

        Pageable pageable = PageRequest.of(idx, 1);
        Page<News> page = newsRepository.findAllByStatus(newsStatus, pageable);
        if (page.hasContent()){
            return page.getContent().get(0);
        }
        return News.builder().build();
    }

    // TODO : 중복되는 조건?
    private boolean isRegistered(News news) {
        if (newsRepository.existsByNameAndUri(news.getName(), news.getUri())) {
            return true;
        }

        return false;
    }
}
