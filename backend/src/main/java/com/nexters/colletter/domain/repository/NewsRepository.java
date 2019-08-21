package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.value.NewsStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    boolean existsByNameAndUri(String name, String uri);
    int countAllByStatus(NewsStatus status);
    Page<News> findAllByStatus(NewsStatus status, Pageable p);
    List<News> findAllByStatus(NewsStatus status);
    List<News> findAllByCategory(Category category);
}
