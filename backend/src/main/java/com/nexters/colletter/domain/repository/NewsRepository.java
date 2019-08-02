package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.value.NewsStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    boolean existsByNameAndUri(String name, String uri);
    Page<News> findAllByStatus(NewsStatus status, Pageable p);
}
