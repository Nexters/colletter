package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.RequestNews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RequestNewsRepository extends JpaRepository<RequestNews, Long> {
}
