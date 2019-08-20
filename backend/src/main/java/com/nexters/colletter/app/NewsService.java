package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.app.dto.RequestNewsDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.model.RequestNews;
import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.NewsRepository;
import com.nexters.colletter.domain.repository.RequestNewsRepository;
import com.nexters.colletter.domain.value.CategoryType;
import com.nexters.colletter.domain.value.NewsStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {
    private final String NEWS_DIRECTORY = "news";

    private final NewsRepository newsRepository;
    private final RequestNewsRepository requestNewsRepository;
    private final CategoryRepository categoryRepository;
    private final S3Service s3Service;

    public NewsService(NewsRepository newsRepository, RequestNewsRepository requestNewsRepository, CategoryRepository categoryRepository, S3Service s3Service) {
        this.newsRepository = newsRepository;
        this.requestNewsRepository = requestNewsRepository;
        this.categoryRepository = categoryRepository;
        this.s3Service = s3Service;
    }

    public long requestNews(RequestNewsDto newsDto) {
        RequestNews requestNews = RequestNews.builder()
                .category(toCategoryEntity(newsDto.getCategoryType()))
                .uri(newsDto.getUri())
                .description(newsDto.getDescription())
                .build();

        return requestNewsRepository.save(requestNews).getId();
    }

    public long registerNews(NewsDto newsDto, MultipartFile imageFile) throws IOException {
        News news = News.builder()
                .category(toCategoryEntity(newsDto.getCategoryType()))
                .name(newsDto.getName())
                .uri(newsDto.getUri())
                .content(newsDto.getContent())
                .status(NewsStatus.REGISTER)
                .build();
        if (isRegistered(news)) {
            throw new AlreadyExistException("Already registered news");
        }
        String name = s3Service.upload(imageFile, NEWS_DIRECTORY, imageName(newsDto));
        news.addImage(name);

        return newsRepository.save(news).getId();
    }

    public void changeNewsStatus(long newsId, NewsStatus status) {
        News news = getNewsById(newsId);
        news.setStatus(status);
        newsRepository.save(news);
    }

    public void modifyNews(long newsId, News news) {

    }

    public void deleteNewsById(long newsId) {
        newsRepository.deleteById(newsId);
    }

    public News getNewsById(long id) {
        if (!newsRepository.existsById(id)) {
            throw new InvalidValueException("Invalid entity id : " + id);
        }

        return newsRepository.findById(id).get();
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public List<News> getAllRequestNews() {
        return newsRepository.findAllByStatus(NewsStatus.REQUEST);
    }

    public List<News> getAllNewsByCategory(String categoryId) {
        return newsRepository.findAllByCategory(
                Category.builder()
                        .id(categoryId)
                        .build()
        );
    }

    public List<News> getAllLatestNews() {
        return newsRepository.findAll(new Sort(Sort.Direction.DESC, "updatedAt"));
    }

    public List<News> getLatestNews(int count) {
        Pageable pageable = PageRequest.of(0, count, new Sort(Sort.Direction.DESC, "updatedAt"));
        Page<News> page = newsRepository.findAll(pageable);
        return page.getContent();
    }

    public List<News> getAllBestNews() {
        return newsRepository.findAll(new Sort(Sort.Direction.DESC, "bookmarkedCount"));
    }

    // TODO : bookmark의 수가 같으면 랜덤으로
    public List<News> getBestNews(int count) {
        Pageable pageable = PageRequest.of(0, count, new Sort(Sort.Direction.DESC, "bookmarkedCount"));
        Page<News> page = newsRepository.findAll(pageable);
        return page.getContent();
    }

    public List<News> getAllPickedNews() {
        return newsRepository.findAllByStatus(NewsStatus.PICK);
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

    private Category toCategoryEntity(CategoryType categoryType) {
        return categoryRepository.findByName(categoryType.getName()).orElseThrow(() -> new InvalidValueException("No Match category name"));
    }

    // TODO
    private String imageName(NewsDto newsDto) {
        return newsDto.getName() + "." + newsDto.getCategoryType().getName();
    }
}
