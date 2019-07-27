package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {
}
