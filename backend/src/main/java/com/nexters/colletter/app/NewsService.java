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
        news.setStatus(status);
        newsRepository.save(news);
    }

    public void modifyNews(News news){

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

    // TODO : bookmark의 수가 같으면 랜덤으로
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
        int statusCount = newsRepository.countAllByStatus(newsStatus);
        List<Integer> randomIdxList = new ArrayList<>();

        // count보다 status의 개수가 많을 때 count 만큼만
        if (statusCount < count) {
            newsList.addAll(newsRepository.findAllByStatus(newsStatus));
            return newsList;
        }

        while(true) {
            if (randomIdxList.size() == count) {
                break;
            }

            int randIdx = (int)(Math.random() * statusCount);
            if (!randomIdxList.contains(randIdx)) {
                randomIdxList.add(randIdx);
            }
        }

        for(Integer idx : randomIdxList) {
            Pageable pageable = PageRequest.of(idx, 1);
            Page<News> page = newsRepository.findAllByStatus(newsStatus, pageable);
            if (page.hasContent()) {
                newsList.add(page.getContent().get(0));
            }
        }
        return newsList;
    }

    // TODO : 중복되는 조건?
    private boolean isRegistered(News news) {
        if (newsRepository.existsByNameAndUri(news.getName(), news.getUri())) {
            return true;
        }

        return false;
    }
}
